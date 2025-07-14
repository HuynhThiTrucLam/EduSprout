import { RecommendationService } from "../services/recommendation_service";
import type { Book } from "../types/book";
import type { Course } from "../types/course";
import type { Document } from "../types/documents";
import type { ProductRecommendation } from "../types/userbehaviour";

export const recommendationService = RecommendationService.getInstance();

// Initialize recommendation service with current user
export const initializeRecommendationService = (userId: string | null) => {
  recommendationService.setCurrentUser(userId);
};

export const trackProductView = (
  productId: string,
  category: string,
  price: number
) => {
  recommendationService.trackProductView(productId, category, price);
};

export const trackSearch = (searchTerm: string) => {
  recommendationService.trackSearch(searchTerm);
};

export const trackTimeSpent = (productId: string, timeInSeconds: number) => {
  recommendationService.trackTimeSpent(productId, timeInSeconds);
};

export const getRecommendations = (
  allProducts: (Course | Book | Document)[],
  limit: number = 6
): ProductRecommendation[] => {
  return recommendationService.getRecommendations(allProducts, limit);
};

export const getUserStats = () => {
  return recommendationService.getUserStats();
};

export const clearUserBehavior = () => {
  recommendationService.clearUserBehavior();
};

// Get recommendations for a specific user (admin function)
export const getRecommendationsForUser = (
  userId: string,
  allProducts: (Course | Book | Document)[],
  limit: number = 6
): ProductRecommendation[] => {
  return recommendationService.getRecommendationsForUser(
    userId,
    allProducts,
    limit
  );
};

// Get all user behaviors (admin function)
export const getAllUserBehaviors = () => {
  return recommendationService.getAllUserBehaviors();
};
