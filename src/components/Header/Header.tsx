import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/images/Logo.svg";
import styles from "./Header.module.scss";
import Cart from "../../assets/Icons/Cart";
import Language from "../../assets/Icons/Language";
import Notification from "../../assets/Icons/Notification";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import Menu from "../../assets/Icons/Menu";
import Close from "../../assets/Icons/Close";
import Contact from "../../assets/Icons/Contact";
import Home from "../../assets/Icons/Home";
import Favorite from "../../assets/Icons/Favorite";
import CourseIcon from "../../assets/Icons/CourseIcon";
import Account from "../../assets/Icons/Account";

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className={styles["Header"]}>
      <div className={styles["Header-container"]}>
        <div className={styles["Header-left"]}>
          <div className={styles["Header-logo"]}>
            <Link to="/" className={styles["Header-logo-link"]}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className={styles["Header-items"]}>
            <div
              className={`${styles["Header-item"]} ${
                isActive("/my-course") ? styles["Header-item--active"] : ""
              }`}
            >
              <Link to="/my-course" className={styles["Header-item-link"]}>
                Khóa học của tôi
              </Link>
            </div>
            <div
              className={`${styles["Header-item"]} ${
                isActive("/favorites") ? styles["Header-item--active"] : ""
              }`}
            >
              <Link to="/favorites" className={styles["Header-item-link"]}>
                Danh sách yêu thích
              </Link>
            </div>
            <div
              className={`${styles["Header-item"]} ${
                isActive("/help") ? styles["Header-item--active"] : ""
              }`}
            >
              <Link to="/help" className={styles["Header-item-link"]}>
                Trợ giúp
              </Link>
            </div>
          </div>
        </div>

        <div className={styles["Header-right"]}>
          <div className={styles["Header-right-item"]}>
            <Cart />
          </div>
          <div className={styles["Header-right-item"]}>
            <Language />
          </div>
          <div className={styles["Header-right-item"]}>
            <Notification />
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <div className={styles["Header-right-img"]}>
                <img
                  src="https://media.istockphoto.com/id/2218571532/vi/anh/h%C3%ACnh-%E1%BA%A3nh-t%C3%A1c-ph%E1%BA%A9m-ngh%E1%BB%87-thu%E1%BA%ADt-xu-h%C6%B0%E1%BB%9Bng-t%E1%BB%95ng-h%E1%BB%A3p-%E1%BA%A3nh-gh%C3%A9p-3d-c%E1%BB%A7a-m%C3%A0u-xanh-m%C3%B2ng-k%C3%A9t-ph%C3%B4ng-n%E1%BB%81n-c%C3%B4.jpg?s=1024x1024&w=is&k=20&c=cTEL_rNHibQ6sjxNEli8KvvO8oR7S2hzdtvvVGCYiBI="
                  alt="avatar"
                />
              </div>
            </PopoverTrigger>
            <PopoverContent
              className={styles["Header-popover"]}
              align="end"
              sideOffset={8}
            >
              <div className={styles["Header-popover-content"]}>
                <div className={styles["Header-popover-header"]}>
                  <div className={styles["Header-popover-avatar"]}>
                    <img
                      src="https://media.istockphoto.com/id/2218571532/vi/anh/h%C3%ACnh-%E1%BA%A3nh-t%C3%A1c-ph%E1%BA%A9m-ngh%E1%BB%87-thu%E1%BA%ADt-xu-h%C6%B0%E1%BB%9Bng-t%E1%BB%95ng-h%E1%BB%A3p-%E1%BA%A3nh-gh%C3%A9p-3d-c%E1%BB%A7a-m%C3%A0u-xanh-m%C3%B2ng-k%C3%A9t-ph%C3%B4ng-n%E1%BB%81n-c%C3%B4.jpg?s=1024x1024&w=is&k=20&c=cTEL_rNHibQ6sjxNEli8KvvO8oR7S2hzdtvvVGCYiBI="
                      alt="avatar"
                    />
                  </div>
                  <div className={styles["Header-popover-user-info"]}>
                    <h4>John Doe</h4>
                    <p>john.doe@example.com</p>
                  </div>
                </div>
                <div className={styles["Header-popover-menu"]}>
                  <Link to="/help" className={styles["Header-popover-item"]}>
                    Trợ giúp
                  </Link>
                  <button className={styles["Header-popover-item"]}>
                    Đăng xuất
                  </button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <div
          className={styles["Header-mobile-menu"]}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={styles["Header-mobile-overlay"]}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className={styles["Header-mobile-menu-content"]}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles["Header-mobile-menu-header"]}>
              <h3>Menu</h3>
              <button
                className={styles["Header-mobile-menu-close"]}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                }}
                aria-label="Close mobile menu"
              >
                <Close />
              </button>
            </div>
            <div className={styles["Header-mobile-menu-items"]}>
              <Link
                to="/"
                className={`${styles["Header-mobile-menu-item"]} ${
                  isActive("/") ? styles["Header-mobile-menu-item--active"] : ""
                }`}
                onClick={closeMobileMenu}
              >
                <Home /> Trang chủ
              </Link>
              <Link
                to="/my-course"
                className={`${styles["Header-mobile-menu-item"]} ${
                  isActive("/my-course")
                    ? styles["Header-mobile-menu-item--active"]
                    : ""
                }`}
                onClick={closeMobileMenu}
              >
                <CourseIcon /> Khóa học của tôi
              </Link>
              <Link
                to="/favorites"
                className={`${styles["Header-mobile-menu-item"]} ${
                  isActive("/favorites")
                    ? styles["Header-mobile-menu-item--active"]
                    : ""
                }`}
                onClick={closeMobileMenu}
              >
                <Favorite /> Danh sách yêu thích
              </Link>
              <Link
                to="/profile"
                className={`${styles["Header-mobile-menu-item"]} ${
                  isActive("/profile")
                    ? styles["Header-mobile-menu-item--active"]
                    : ""
                }`}
                onClick={closeMobileMenu}
              >
                <Account /> Tài khoản của tôi
              </Link>
              <Link
                to="/help"
                className={`${styles["Header-mobile-menu-item"]} ${
                  isActive("/help")
                    ? styles["Header-mobile-menu-item--active"]
                    : ""
                }`}
                onClick={closeMobileMenu}
              >
                <Contact /> Trợ giúp
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
