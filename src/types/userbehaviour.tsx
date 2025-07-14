import type { Book } from "./book";
import type { Course } from "./course";
import type { Document } from "./documents";

// Types for recommendation system
export interface UserBehavior {
  viewedProducts: string[]; // Product IDs
  categoryPreferences: { [key: string]: number }; // Category -> view count
  priceRange: { min: number; max: number };
  lastViewed: string[]; // Recently viewed products
  searchHistory: string[]; // Search terms
  timeSpent: { [key: string]: number }; // Product ID -> time spent in seconds
}

export interface ProductRecommendation {
  product: Course | Book | Document;
  score: number;
  reason: string;
}
