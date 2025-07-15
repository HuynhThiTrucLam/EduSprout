import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/ui/input";
import Button from "../../components/commons/Button";
import { useAuth } from "../../services/auth_service";
import styles from "./Auth.module.scss";
import { Toaster } from "../../components/ui/sonner";
import { toast } from "sonner";
import { EyeOff } from "lucide-react";

interface AuthFormData {
  email: string;
  password: string;
  confirmPassword?: string;
  name?: string;
}

const Auth = () => {
  const navigate = useNavigate();
  const { signIn, signUp, isAuthenticated } = useAuth();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState<AuthFormData>({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.email || !formData.password) {
      toast.error("Email và mật khẩu là bắt buộc");
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Vui lòng nhập đúng định dạng email");
      return false;
    }

    if (formData.password.length < 6) {
      toast.error("Mật khẩu phải có ít nhất 6 ký tự");
      return false;
    }

    if (isSignUp) {
      if (!formData.name) {
        toast.error("Tên là bắt buộc");
        return false;
      }
      if (formData.password !== formData.confirmPassword) {
        toast.error("Mật khẩu không khớp");
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      if (isSignUp) {
        await signUp(formData.name!, formData.email, formData.password);
        toast.success("Tạo tài khoản thành công!");
      } else {
        await signIn(formData.email, formData.password);
        toast.success("Đăng nhập thành công!");
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Đã xảy ra lỗi");
    } finally {
      setLoading(false);
    }
  };

  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
    });
  };

  return (
    <div className={styles["Auth"]}>
      <div className={styles["Auth-container"]}>
        <img
          src="https://images.pexels.com/photos/4238485/pexels-photo-4238485.jpeg"
          alt=""
        />
        <div className={styles["Auth-card"]}>
          <div className={styles["Auth-header"]}>
            <h1>{isSignUp ? "Tạo tài khoản" : "Đăng nhập"}</h1>
            <p>
              {isSignUp
                ? "Đăng ký để bắt đầu sử dụng EduSprout"
                : "Đăng nhập để tiếp tục sử dụng EduSprout"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className={styles["Auth-form"]}>
            <div
              onKeyDown={(e) => {
                if (e.key === "Enter" && !loading) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
            >
              {isSignUp && (
                <div className={styles["Auth-field"]}>
                  <label htmlFor="name">Họ và tên</label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Nhập tên đầy đủ"
                    value={formData.name}
                    onChange={handleInputChange}
                    required={isSignUp}
                  />
                </div>
              )}

              <div className={styles["Auth-field"]}>
                <label htmlFor="email">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Nhập email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className={styles["Auth-field"]}>
                <label htmlFor="password">Mật khẩu</label>
                <div className={styles["Auth-password-wrapper"]}>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Nhập mật khẩu"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                  <button
                    type="button"
                    className={styles["Auth-eye-icon"]}
                    onClick={() => {
                      const input = document.getElementById(
                        "password"
                      ) as HTMLInputElement;
                      input.type =
                        input.type === "password" ? "text" : "password";
                    }}
                  >
                    <EyeOff size={18} />
                  </button>
                </div>
              </div>

              {isSignUp && (
                <div className={styles["Auth-field"]}>
                  <label htmlFor="confirmPassword">Nhập lại mật khẩu</label>
                  <div className={styles["Auth-password-wrapper"]}>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="Nhập lại mật khẩu"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required={isSignUp}
                    />
                    <button
                      type="button"
                      className={styles["Auth-eye-icon"]}
                      onClick={() => {
                        const input = document.getElementById(
                          "confirmPassword"
                        ) as HTMLInputElement;
                        input.type =
                          input.type === "password" ? "text" : "password";
                      }}
                    >
                      <EyeOff size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* {error && <div className={styles["Auth-error"]}>{error}</div>} */}

              <Button
                text={
                  loading ? "Đang tải..." : isSignUp ? "Đăng ký" : "Đăng nhập"
                }
                className={styles["Auth-button"]}
                onClick={
                  loading
                    ? undefined
                    : () => handleSubmit(new Event("submit") as any)
                }
              />
            </div>
          </form>

          <div className={styles["Auth-footer"]}>
            <p>
              {isSignUp ? "Đã có tài khoản?" : "Chưa có tài khoản?"}
              <button
                type="button"
                onClick={toggleAuthMode}
                className={styles["Auth-toggle"]}
              >
                {isSignUp ? "Đăng nhập" : "Đăng ký"}
              </button>
            </p>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Auth;
