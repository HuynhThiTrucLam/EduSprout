import { useState } from "react";
import { Link } from "react-router-dom";
import type { User } from "../../types/user";
import type { Course } from "../../types/course";
import type { Book } from "../../types/book";
import type { Document } from "../../types/documents";
import styles from "./UserMenu.module.scss";

interface UserMenuProps {
  user: User;
  favorites: (Course | Book | Document)[];
}

const UserMenu = ({ user, favorites }: UserMenuProps) => {
  const [activeTab, setActiveTab] = useState<"account" | "favorites">(
    "account"
  );

  const handleLogout = () => {
    // TODO: Implement logout logic
    console.log("Logging out...");
  };

  return (
    <div className={styles["UserMenu"]}>
      {/* User Profile Section */}
      <div className={styles["UserMenu-profile"]}>
        <div className={styles["UserMenu-profile-avatar"]}>
          <img src={user.image} alt={user.name} />
        </div>
        <div className={styles["UserMenu-profile-info"]}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className={styles["UserMenu-tabs"]}>
        <button
          className={`${styles["UserMenu-tab"]} ${
            activeTab === "account" ? styles["active"] : ""
          }`}
          onClick={() => setActiveTab("account")}
        >
          Account
        </button>
        <button
          className={`${styles["UserMenu-tab"]} ${
            activeTab === "favorites" ? styles["active"] : ""
          }`}
          onClick={() => setActiveTab("favorites")}
        >
          Favorites ({favorites.length})
        </button>
      </div>

      {/* Tab Content */}
      <div className={styles["UserMenu-content"]}>
        {activeTab === "account" && (
          <div className={styles["UserMenu-account"]}>
            <div className={styles["UserMenu-section"]}>
              <h4>Account Settings</h4>
              <div className={styles["UserMenu-item"]}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span>Edit Profile</span>
              </div>
              <div className={styles["UserMenu-item"]}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>Contact Support</span>
              </div>
              <div className={styles["UserMenu-item"]}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 12l2 2 4-4" />
                  <path d="M21 12c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2z" />
                  <path d="M3 12c1 0 2-1 2-2s-1-2-2-2-2 1-2 2 1 2 2 2z" />
                  <path d="M12 3c0 1-1 2-2 2s-2-1-2-2 1-2 2-2 2 1 2 2z" />
                  <path d="M12 21c0-1 1-2 2-2s2 1 2 2-1 2-2 2-2-1-2-2z" />
                </svg>
                <span>Preferences</span>
              </div>
            </div>

            <div className={styles["UserMenu-section"]}>
              <h4>My Learning</h4>
              <div className={styles["UserMenu-item"]}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
                <span>My Courses</span>
              </div>
              <div className={styles["UserMenu-item"]}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span>My Certificates</span>
              </div>
            </div>

            <div className={styles["UserMenu-section"]}>
              <button
                className={styles["UserMenu-logout"]}
                onClick={handleLogout}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16,17 21,12 16,7" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
                <span>Logout</span>
              </button>
            </div>
          </div>
        )}

        {activeTab === "favorites" && (
          <div className={styles["UserMenu-favorites"]}>
            {favorites.length === 0 ? (
              <div className={styles["UserMenu-empty"]}>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <h4>No favorites yet</h4>
                <p>
                  Start exploring and add your favorite courses, books, and
                  documents!
                </p>
                <Link to="/" className={styles["UserMenu-explore-btn"]}>
                  Explore Products
                </Link>
              </div>
            ) : (
              <div className={styles["UserMenu-favorites-list"]}>
                {favorites.slice(0, 5).map((item) => (
                  <div
                    key={item.id}
                    className={styles["UserMenu-favorite-item"]}
                  >
                    <div className={styles["UserMenu-favorite-image"]}>
                      <img src={item.infor.image} alt={item.infor.title} />
                    </div>
                    <div className={styles["UserMenu-favorite-info"]}>
                      <h5>{item.infor.title}</h5>
                      <p>{item.infor.category.title}</p>
                      <span className={styles["UserMenu-favorite-price"]}>
                        {item.infor.price} VND
                      </span>
                    </div>
                    <button className={styles["UserMenu-favorite-remove"]}>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </div>
                ))}
                {favorites.length > 5 && (
                  <div className={styles["UserMenu-favorites-more"]}>
                    <Link to="/favorites">
                      View all {favorites.length} favorites
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserMenu;
