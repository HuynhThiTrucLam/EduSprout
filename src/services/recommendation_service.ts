import type { Document } from "../types/documents";
import type { Book } from "../types/book";
import type { Course } from "../types/course";
import type {
  ProductRecommendation,
  UserBehavior,
} from "../types/userbehaviour";
import { CookieManager } from "./cookie_service";

// Recommendation service with user-specific support
export class RecommendationService {
  private static instance: RecommendationService;
  private userBehaviors: Map<string, UserBehavior> = new Map();
  private currentUserId: string | null = null;

  private constructor() {}

  static getInstance(): RecommendationService {
    if (!RecommendationService.instance) {
      RecommendationService.instance = new RecommendationService();
    }
    return RecommendationService.instance;
  }

  // Set current user ID
  setCurrentUser(userId: string | null): void {
    this.currentUserId = userId;
    if (userId && !this.userBehaviors.has(userId)) {
      this.userBehaviors.set(userId, this.loadUserBehavior(userId));
    }
  }

  // Get current user behavior
  private getCurrentUserBehavior(): UserBehavior {
    if (!this.currentUserId) {
      return this.getDefaultUserBehavior();
    }

    const behavior = this.userBehaviors.get(this.currentUserId);
    if (!behavior) {
      const newBehavior = this.loadUserBehavior(this.currentUserId);
      this.userBehaviors.set(this.currentUserId, newBehavior);
      return newBehavior;
    }

    return behavior;
  }

  // Load user behavior from cookies with user-specific key
  private loadUserBehavior(userId: string): UserBehavior {
    try {
      const cookieKey = `${CookieManager.COOKIE_NAME}_${userId}`;
      const cookieData = CookieManager.getCookie(cookieKey);
      if (cookieData) {
        const parsed = JSON.parse(decodeURIComponent(cookieData));
        return {
          viewedProducts: parsed.viewedProducts || [],
          categoryPreferences: parsed.categoryPreferences || {},
          priceRange: parsed.priceRange || { min: 0, max: 1000 },
          lastViewed: parsed.lastViewed || [],
          searchHistory: parsed.searchHistory || [],
          timeSpent: parsed.timeSpent || {},
        };
      }
    } catch (error) {
      console.error(`Error loading user behavior for user ${userId}:`, error);
    }

    return this.getDefaultUserBehavior();
  }

  // Get default user behavior for anonymous users
  private getDefaultUserBehavior(): UserBehavior {
    return {
      viewedProducts: [],
      categoryPreferences: {},
      priceRange: { min: 0, max: 1000 },
      lastViewed: [],
      searchHistory: [],
      timeSpent: {},
    };
  }

  // Save user behavior to cookies with user-specific key
  private saveUserBehavior(): void {
    if (!this.currentUserId) return;

    try {
      const userBehavior = this.getCurrentUserBehavior();
      const cookieKey = `${CookieManager.COOKIE_NAME}_${this.currentUserId}`;
      const cookieData = encodeURIComponent(JSON.stringify(userBehavior));
      CookieManager.setCookie(cookieKey, cookieData, 30);
    } catch (error) {
      console.error(
        `Error saving user behavior for user ${this.currentUserId}:`,
        error
      );
    }
  }

  // Track product view for current user
  trackProductView(productId: string, category: string, price: number): void {
    const userBehavior = this.getCurrentUserBehavior();

    // Add to viewed products if not already present
    if (!userBehavior.viewedProducts.includes(productId)) {
      userBehavior.viewedProducts.push(productId);
    }

    // Update category preferences
    userBehavior.categoryPreferences[category] =
      (userBehavior.categoryPreferences[category] || 0) + 1;

    // Update price range
    if (price < userBehavior.priceRange.min) {
      userBehavior.priceRange.min = price;
    }
    if (price > userBehavior.priceRange.max) {
      userBehavior.priceRange.max = price;
    }

    // Update last viewed (keep only last 10)
    userBehavior.lastViewed = [
      productId,
      ...userBehavior.lastViewed.filter((id) => id !== productId),
    ].slice(0, 10);

    // Update the behavior in memory
    if (this.currentUserId) {
      this.userBehaviors.set(this.currentUserId, userBehavior);
    }

    this.saveUserBehavior();
  }

  // Track search for current user
  trackSearch(searchTerm: string): void {
    const userBehavior = this.getCurrentUserBehavior();

    userBehavior.searchHistory = [
      searchTerm,
      ...userBehavior.searchHistory.filter(
        (term) => term.toLowerCase().trim() !== searchTerm.toLowerCase().trim()
      ),
    ].slice(0, 10);

    // Update the behavior in memory
    if (this.currentUserId) {
      this.userBehaviors.set(this.currentUserId, userBehavior);
    }

    this.saveUserBehavior();
  }

  // Track time spent on product for current user
  trackTimeSpent(productId: string, timeInSeconds: number): void {
    const userBehavior = this.getCurrentUserBehavior();

    userBehavior.timeSpent[productId] =
      (userBehavior.timeSpent[productId] || 0) + timeInSeconds;

    // Update the behavior in memory
    if (this.currentUserId) {
      this.userBehaviors.set(this.currentUserId, userBehavior);
    }

    this.saveUserBehavior();
  }

  // Get product recommendations for current user
  getRecommendations(
    allProducts: (Course | Book | Document)[],
    limit: number = 6
  ): ProductRecommendation[] {
    const userBehavior = this.getCurrentUserBehavior();

    if (userBehavior.viewedProducts.length === 0) {
      // If no history, return popular products
      return this.getPopularProducts(allProducts, limit);
    }

    const recommendations: ProductRecommendation[] = [];

    for (const product of allProducts) {
      // Skip if already viewed
      if (userBehavior.viewedProducts.includes(product.id)) {
        continue;
      }

      let score = 0;
      const reasons: string[] = [];

      // Category preference score
      const category = product.infor.category.title.toLowerCase();
      const categoryScore = userBehavior.categoryPreferences[category] || 0;
      if (categoryScore > 0) {
        score += categoryScore * 2;
        reasons.push(`You've viewed ${categoryScore} ${category} products`);
      }

      // Price range score
      const price = product.infor.price;
      if (
        price >= userBehavior.priceRange.min &&
        price <= userBehavior.priceRange.max
      ) {
        score += 3;
        reasons.push("Matches your price range");
      }

      // Similar to recently viewed
      const recentProducts = this.getProductsByIds(
        userBehavior.lastViewed.slice(0, 3),
        allProducts
      );
      const similarityScore = this.calculateSimilarity(product, recentProducts);
      if (similarityScore > 0) {
        score += similarityScore;
        reasons.push("Similar to recently viewed products");
      }

      // Language preference (if available)
      if (product.infor.language && product.infor.language.length > 0) {
        const userLanguages = this.getUserLanguagePreferences(userBehavior);
        const languageMatch = product.infor.language.some((lang) =>
          userLanguages.includes(lang.title.toLowerCase())
        );
        if (languageMatch) {
          score += 2;
          reasons.push("Matches your language preference");
        }
      }

      // Major preference (if available)
      if (product.infor.majors && product.infor.majors.length > 0) {
        const userMajors = this.getUserMajorPreferences(userBehavior);
        const majorMatch = product.infor.majors.some((major) =>
          userMajors.includes(major.title.toLowerCase())
        );
        if (majorMatch) {
          score += 2;
          reasons.push("Matches your subject area preference");
        }
      }

      if (score > 0) {
        recommendations.push({
          product,
          score,
          reason: reasons.join(", "),
        });
      }
    }

    // Sort by score and return top recommendations
    return recommendations.sort((a, b) => b.score - a.score).slice(0, limit);
  }

  // Get popular products based on sell number (fallback when no user history)
  private getPopularProducts(
    allProducts: (Course | Book | Document)[],
    limit: number
  ): ProductRecommendation[] {
    return allProducts
      .sort((a, b) => (b.infor.sellNumber || 0) - (a.infor.sellNumber || 0))
      .slice(0, limit)
      .map((product) => ({
        product,
        score: product.infor.sellNumber || 0,
        reason: "Popular product",
      }));
  }

  // Calculate similarity between products
  private calculateSimilarity(
    product: Course | Book | Document,
    recentProducts: (Course | Book | Document)[]
  ): number {
    if (recentProducts.length === 0) return 0;

    let similarityScore = 0;

    for (const recentProduct of recentProducts) {
      // Category similarity
      if (product.infor.category.title === recentProduct.infor.category.title) {
        similarityScore += 3;
      }

      // Price similarity (within 20% range)
      const priceDiff = Math.abs(
        product.infor.price - recentProduct.infor.price
      );
      const avgPrice = (product.infor.price + recentProduct.infor.price) / 2;
      if (priceDiff / avgPrice <= 0.2) {
        similarityScore += 2;
      }

      // Language similarity
      if (product.infor.language && recentProduct.infor.language) {
        const commonLanguages = product.infor.language.filter((lang1) =>
          recentProduct.infor.language.some((lang2) => lang1.id === lang2.id)
        );
        similarityScore += commonLanguages.length;
      }

      // Major similarity
      if (product.infor.majors && recentProduct.infor.majors) {
        const commonMajors = product.infor.majors.filter((major1) =>
          recentProduct.infor.majors.some((major2) => major1.id === major2.id)
        );
        similarityScore += commonMajors.length;
      }
    }

    return similarityScore / recentProducts.length;
  }

  // Get products by IDs
  private getProductsByIds(
    productIds: string[],
    allProducts: (Course | Book | Document)[]
  ): (Course | Book | Document)[] {
    return allProducts.filter((product) => productIds.includes(product.id));
  }

  // Get user language preferences from viewed products
  private getUserLanguagePreferences(userBehavior: UserBehavior): string[] {
    // // Analyze user's viewed products to determine language preferences
    // const languageCounts: { [key: string]: number } = {};

    // This would be implemented by analyzing the user's viewed products
    // For now, return common languages based on user behavior
    if (userBehavior.viewedProducts.length > 0) {
      // You could analyze the actual products here
      return ["english", "vietnamese"];
    }

    return ["english", "vietnamese"];
  }

  // Get user major preferences from viewed products
  private getUserMajorPreferences(userBehavior: UserBehavior): string[] {
    // // Analyze user's viewed products to determine major preferences
    // const majorCounts: { [key: string]: number } = {};

    // This would be implemented by analyzing the user's viewed products
    // For now, return common majors based on user behavior
    if (userBehavior.viewedProducts.length > 0) {
      // You could analyze the actual products here
      return ["computer science", "business", "engineering"];
    }

    return ["computer science", "business", "engineering"];
  }

  // Get user behavior statistics for current user
  getUserStats(): {
    totalViewed: number;
    favoriteCategory: string;
    averagePrice: number;
    mostViewedProducts: string[];
    isAuthenticated: boolean;
  } {
    const userBehavior = this.getCurrentUserBehavior();

    const totalViewed = userBehavior.viewedProducts.length;

    const favoriteCategory =
      Object.entries(userBehavior.categoryPreferences).sort(
        ([, a], [, b]) => b - a
      )[0]?.[0] || "None";

    const averagePrice =
      (userBehavior.priceRange.min + userBehavior.priceRange.max) / 2;

    const mostViewedProducts = userBehavior.lastViewed.slice(0, 5);

    return {
      totalViewed,
      favoriteCategory,
      averagePrice,
      mostViewedProducts,
      isAuthenticated: !!this.currentUserId,
    };
  }

  // Clear user behavior for current user
  clearUserBehavior(): void {
    if (this.currentUserId) {
      this.userBehaviors.delete(this.currentUserId);
      const cookieKey = `${CookieManager.COOKIE_NAME}_${this.currentUserId}`;
      CookieManager.deleteCookie(cookieKey);
    } else {
      // Clear anonymous user behavior
      const cookieKey = `${CookieManager.COOKIE_NAME}_anonymous`;
      CookieManager.deleteCookie(cookieKey);
    }
  }

  // Get recommendations for a specific user (for admin purposes)
  getRecommendationsForUser(
    userId: string,
    allProducts: (Course | Book | Document)[],
    limit: number = 6
  ): ProductRecommendation[] {
    const originalUserId = this.currentUserId;
    this.setCurrentUser(userId);
    const recommendations = this.getRecommendations(allProducts, limit);
    this.setCurrentUser(originalUserId);
    return recommendations;
  }

  // Get all user behaviors (for admin purposes)
  getAllUserBehaviors(): Map<string, UserBehavior> {
    return new Map(this.userBehaviors);
  }
}
