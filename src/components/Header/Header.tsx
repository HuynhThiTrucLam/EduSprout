import { StarIcon } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Account from "../../assets/Icons/Account";
import Cart from "../../assets/Icons/Cart";
import Close from "../../assets/Icons/Close";
import Contact from "../../assets/Icons/Contact";
import CourseIcon from "../../assets/Icons/CourseIcon";
import Home from "../../assets/Icons/Home";
import Language from "../../assets/Icons/Language";
import Menu from "../../assets/Icons/Menu";
import Notification from "../../assets/Icons/Notification";
import logo from "../../assets/images/Logo.svg";
import { useAuth } from "../../services/auth_service";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import styles from "./Header.module.scss";
import { toast } from "sonner";
import SignOut from "../../assets/Icons/SignOut";

const Header = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleSignOut = () => {
    signOut();
  };

  const handleToast = () => {
    toast.success("Đây là chức năng sẽ phát triển trong tương lai");
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
                isActive("/my-favorite") ? styles["Header-item--active"] : ""
              }`}
            >
              <Link to="/my-favorite" className={styles["Header-item-link"]}>
                Danh sách yêu thích
              </Link>
            </div>
          </div>
        </div>

        <div className={styles["Header-right"]}>
          <div
            className={styles["Header-right-item"]}
            data-tooltip="Giỏ hàng"
            onClick={handleToast}
          >
            <Cart />
          </div>
          <div
            className={styles["Header-right-item"]}
            data-tooltip="Ngôn ngữ"
            onClick={handleToast}
          >
            <Language />
          </div>
          <div
            className={styles["Header-right-item"]}
            data-tooltip="Thông báo"
            onClick={handleToast}
          >
            <Notification />
          </div>
          {user ? (
            <Popover>
              <PopoverTrigger asChild>
                <div
                  className={styles["Header-right-img"]}
                  data-tooltip="Tài khoản"
                >
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
                      <img src={user.image} alt="avatar" />
                    </div>
                    <div className={styles["Header-popover-user-info"]}>
                      <h4>{user.name}</h4>
                      <p>{user.email}</p>
                    </div>
                  </div>
                  <div className={styles["Header-popover-menu"]}>
                    <Link to="/" className={styles["Header-popover-item"]}>
                      Trợ giúp
                    </Link>
                    <button
                      className={styles["Header-popover-item"]}
                      onClick={handleSignOut}
                    >
                      Đăng xuất
                    </button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles["Header-notAuth-icon"]}
                  data-tooltip="Đăng nhập"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21.0705 21.5987C22.3128 20.4314 23.3025 19.0217 23.9784 17.4567C24.6543 15.8917 25.002 14.2047 25 12.5C25 5.59615 19.4038 0 12.5 0C5.59616 0 8.34514e-06 5.59615 8.34514e-06 12.5C-0.00196409 14.2047 0.345735 15.8917 1.02161 17.4567C1.69749 19.0217 2.68717 20.4314 3.92949 21.5987C6.24608 23.787 9.31326 25.0043 12.5 25C15.6867 25.0043 18.7539 23.787 21.0705 21.5987ZM4.99359 19.9513C5.89369 18.8252 7.03592 17.9163 8.33543 17.2922C9.63495 16.6681 11.0584 16.3447 12.5 16.3461C13.9416 16.3447 15.365 16.6681 16.6646 17.2922C17.9641 17.9163 19.1063 18.8252 20.0064 19.9513C19.0244 20.9432 17.8552 21.7303 16.5666 22.2668C15.2781 22.8034 13.8958 23.0787 12.5 23.0769C11.1042 23.0787 9.72193 22.8034 8.43337 22.2668C7.14481 21.7303 5.97561 20.9432 4.99359 19.9513ZM17.3077 8.65384C17.3077 9.92892 16.8012 11.1518 15.8996 12.0534C14.9979 12.955 13.7751 13.4615 12.5 13.4615C11.2249 13.4615 10.0021 12.955 9.10045 12.0534C8.19883 11.1518 7.69231 9.92892 7.69231 8.65384C7.69231 7.37876 8.19883 6.15591 9.10045 5.25429C10.0021 4.35267 11.2249 3.84615 12.5 3.84615C13.7751 3.84615 14.9979 4.35267 15.8996 5.25429C16.8012 6.15591 17.3077 7.37876 17.3077 8.65384Z"
                    fill="#828282"
                  />
                </svg>
              </PopoverTrigger>
              <PopoverContent
                className={styles["Header-notAuth"]}
                align="end"
                sideOffset={8}
              >
                <div className={styles["Header-notAuth-content"]}>
                  <div className={styles["Header-notAuth-menu"]}>
                    <Link to="/" className={styles["Header-notAuth-item"]}>
                      <Contact /> Trợ giúp
                    </Link>
                    <button
                      className={styles["Header-notAuth-item"]}
                      onClick={() => {
                        navigate("/auth");
                      }}
                    >
                      <Account /> Đăng nhập
                    </button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>

        <div
          className={styles["Header-mobile-menu"]}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-tooltip="Menu"
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
                data-tooltip="Đóng menu"
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
                data-tooltip="Trang chủ"
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
                data-tooltip="Khóa học của tôi"
              >
                <CourseIcon /> Khóa học của tôi
              </Link>
              <Link
                to="/my-favorite"
                className={`${styles["Header-mobile-menu-item"]} ${
                  isActive("/my-favorite")
                    ? styles["Header-mobile-menu-item--active"]
                    : ""
                }`}
                onClick={closeMobileMenu}
                data-tooltip="Danh sách yêu thích"
              >
                <StarIcon
                  style={{
                    strokeWidth: 1.5,
                  }}
                />{" "}
                Danh sách yêu thích
              </Link>
              <Link
                to="/"
                className={`${styles["Header-mobile-menu-item"]} ${
                  isActive("#") ? styles["Header-mobile-menu-item--active"] : ""
                }`}
                onClick={closeMobileMenu}
                data-tooltip="Trợ giúp"
              >
                <Contact /> Trợ giúp
              </Link>
              <Link
                to="#"
                className={`${styles["Header-mobile-menu-item"]} ${
                  isActive("#") ? styles["Header-mobile-menu-item--active"] : ""
                }`}
                onClick={closeMobileMenu}
                data-tooltip="Đăng xuất"
              >
                <SignOut /> Đăng xuất
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
