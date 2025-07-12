import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.svg";
import styles from "./Header.module.scss";
import Cart from "../../assets/Icons/Cart";
import Language from "../../assets/Icons/Language";
import Notification from "../../assets/Icons/Notification";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const Header = () => {
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
            <div className={styles["Header-item"]}>
              <Link to="/" className={styles["Header-item-link"]}>
                Khóa học của tôi
              </Link>
            </div>
            <div className={styles["Header-item"]}>
              <Link to="/" className={styles["Header-item-link"]}>
                Danh sách yêu thích
              </Link>
            </div>
            <div className={styles["Header-item"]}>
              <Link to="/" className={styles["Header-item-link"]}>
                Lorem ipsum
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
                  <Link to="/profile" className={styles["Header-popover-item"]}>
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
      </div>
    </div>
  );
};

export default Header;
