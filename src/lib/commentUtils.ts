import type { Comment } from "../types/comments";

/**
 * Count the number of comments with a specific rating
 * @param comments - Array of comments
 * @param rating - Rating to count (1-5)
 * @returns Number of comments with the specified rating
 */
export const countCommentsByRating = (
  comments: Comment[],
  rating: number
): number => {
  return comments.filter((comment) => comment.rating === rating).length;
};

/**
 * Calculate the average rating of all comments
 * @param comments - Array of comments
 * @returns Average rating rounded to 1 decimal place, or 0 if no comments
 */
export const calculateAverageRating = (comments: Comment[]): number => {
  if (!comments || comments.length === 0) return 0;

  const totalRating = comments.reduce(
    (sum, comment) => sum + comment.rating,
    0
  );
  return Math.round((totalRating / comments.length) * 10) / 10;
};

/**
 * Calculate the percentage of comments with a specific rating
 * @param comments - Array of comments
 * @param rating - Rating to calculate percentage for (1-5)
 * @returns Percentage rounded to 1 decimal place
 */
export const calculateRatingPercentage = (
  comments: Comment[],
  rating: number
): number => {
  if (!comments || comments.length === 0) return 0;

  const count = countCommentsByRating(comments, rating);
  return Math.round((count / comments.length) * 1000) / 10;
};

/**
 * Get rating distribution for all ratings (1-5)
 * @param comments - Array of comments
 * @returns Object with count and percentage for each rating
 */
export const getRatingDistribution = (comments: Comment[]) => {
  const distribution = {
    1: { count: 0, percentage: 0 },
    2: { count: 0, percentage: 0 },
    3: { count: 0, percentage: 0 },
    4: { count: 0, percentage: 0 },
    5: { count: 0, percentage: 0 },
  };

  if (!comments || comments.length === 0) return distribution;

  for (let rating = 1; rating <= 5; rating++) {
    const count = countCommentsByRating(comments, rating);
    const percentage = calculateRatingPercentage(comments, rating);
    distribution[rating as keyof typeof distribution] = { count, percentage };
  }

  return distribution;
};

/**
 * Get total number of comments
 * @param comments - Array of comments
 * @returns Total number of comments
 */
export const getTotalComments = (comments: Comment[]): number => {
  return comments?.length || 0;
};
