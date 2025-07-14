import { useEffect, useState } from "react";
import { useAuth } from "../services/auth_service";
import {
  getRecommendations,
  getUserStats,
  initializeRecommendationService,
} from "../lib/recommendationUtils";
import type { ProductRecommendation } from "../types/userbehaviour";
import type { Book } from "../types/book";
import type { Course } from "../types/course";
import type { Document } from "../types/documents";

export const useRecommendations = (
  allProducts: (Course | Book | Document)[],
  limit: number = 6
) => {
  const { user, isAuthenticated } = useAuth();
  const [recommendations, setRecommendations] = useState<
    ProductRecommendation[]
  >([]);
  const [userStats, setUserStats] = useState(getUserStats());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize recommendation service when user changes
    initializeRecommendationService(user?.id || null);

    // Update user stats
    setUserStats(getUserStats());

    // Get recommendations
    const recs = getRecommendations(allProducts, limit);
    setRecommendations(recs);
    setIsLoading(false);
  }, [user, isAuthenticated, allProducts, limit]);

  const refreshRecommendations = () => {
    const recs = getRecommendations(allProducts, limit);
    setRecommendations(recs);
    setUserStats(getUserStats());
  };

  return {
    recommendations,
    userStats,
    isLoading,
    refreshRecommendations,
    isAuthenticated,
    userId: user?.id || null,
  };
};
