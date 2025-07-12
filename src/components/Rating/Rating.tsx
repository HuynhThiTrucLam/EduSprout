import styles from "./Rating.module.scss";

interface RatingProps {
  rating: number;
  maxRating?: number;
  showNumber?: boolean;
  size?: "small" | "medium" | "large";
}

const Rating = ({
  rating,
  maxRating = 5,
  showNumber = true,
  size = "medium",
}: RatingProps) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Render full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={`full-${i}`}
          className={styles["Rating-star"]}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    }

    // Render half star if needed
    if (hasHalfStar) {
      stars.push(
        <svg
          key="half"
          className={styles["Rating-star"]}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <defs>
            <linearGradient id="half-star">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#e5e7eb" />
            </linearGradient>
          </defs>
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            fill="url(#half-star)"
          />
        </svg>
      );
    }

    // Render empty stars
    const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg
          key={`empty-${i}`}
          className={styles["Rating-star"]}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="#e5e7eb"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <div className={`${styles["Rating"]} ${styles[`Rating--${size}`]}`}>
      <div className={styles["Rating-stars"]}>{renderStars()}</div>
      {showNumber && (
        <span className={styles["Rating-number"]}>{rating.toFixed(1)}</span>
      )}
    </div>
  );
};

export default Rating;
