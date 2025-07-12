import type { Comment } from "@/types/comments";
import styles from "./AttributeTab.module.scss";
import Rating from "../Rating/Rating";
import NoData from "../NoData/NoData";

// Utility functions for comment analysis
const countCommentsByRating = (comments: Comment[], rating: number): number => {
  return comments.filter((comment) => comment.rating === rating).length;
};

const calculateAverageRating = (comments: Comment[]): number => {
  if (!comments || comments.length === 0) return 0;
  const totalRating = comments.reduce(
    (sum, comment) => sum + comment.rating,
    0
  );
  return Math.round((totalRating / comments.length) * 10) / 10;
};

const calculateRatingPercentage = (
  comments: Comment[],
  rating: number
): number => {
  if (!comments || comments.length === 0) return 0;
  const count = countCommentsByRating(comments, rating);
  return Math.round((count / comments.length) * 1000) / 10;
};

const getRatingDistribution = (comments: Comment[]) => {
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

const getTotalComments = (comments: Comment[]): number => {
  return comments?.length || 0;
};

interface RatingTabProps {
  comments: Comment[];
}

const RatingTab = ({ comments }: RatingTabProps) => {
  const averageRating = calculateAverageRating(comments);
  const totalComments = getTotalComments(comments);
  const ratingDistribution = getRatingDistribution(comments);

  return (
    <div className={styles["AttributeTab-rating"]}>
      <div className={styles["AttributeTab-rating-container"]}>
        <div className={styles["AttributeTab-rating-top"]}>
          <div className={styles["AttributeTab-rating-top-left"]}>
            <p>{averageRating.toFixed(1)}</p>
            <Rating rating={averageRating} showNumber={false} size="medium" />
            <p className={styles["total-comments"]}>{totalComments} đánh giá</p>
          </div>
          <div className={styles["AttributeTab-rating-top-right"]}>
            {[5, 4, 3, 2, 1].map((rating) => {
              const percentage =
                ratingDistribution[rating as keyof typeof ratingDistribution]
                  .percentage;
              const count =
                ratingDistribution[rating as keyof typeof ratingDistribution]
                  .count;

              return (
                <div key={rating} className={styles["rating-rank"]}>
                  <p>{rating}.0</p>
                  <div className={styles["custom-slider"]}>
                    <div
                      className={styles["slider-fill"]}
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <p>{count} đánh giá</p>
                </div>
              );
            })}
          </div>
        </div>
        {comments.length > 0 ? (
          <div className={styles["AttributeTab-rating-bottom"]}>
            {comments.map((comment) => {
              return (
                <div className={styles["AttributeTab-rating-item"]}>
                  <div className={styles["AttributeTab-rating-item-header"]}>
                    <div className={styles["AttributeTab-rating-item-avatar"]}>
                      <img src={comment.user.image} alt="avatar" />
                      <div className={styles["AttributeTab-rating-item-infor"]}>
                        <p>{comment.user.name}</p>
                        <p>Created at: {comment.createdAt.split("T")[0]}</p>
                      </div>
                    </div>
                    <Rating
                      rating={comment.rating}
                      showNumber={false}
                      size="small"
                    />
                  </div>
                  <p>{comment.content}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <NoData text="Không có đánh giá" />
        )}
      </div>
    </div>
  );
};

export default RatingTab;
