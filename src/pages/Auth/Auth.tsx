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
      toast.error("Email and password are required");
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return false;
    }

    if (isSignUp) {
      if (!formData.name) {
        toast.error("Name is required for sign up");
        return false;
      }
      if (formData.password !== formData.confirmPassword) {
        toast.error("Passwords do not match");
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
        toast.success("Account created successfully!");
      } else {
        await signIn(formData.email, formData.password);
        toast.success("Signed in successfully!");
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "An error occurred");
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
            <h1>{isSignUp ? "Create Account" : "Welcome Back"}</h1>
            <p>
              {isSignUp
                ? "Sign up to get started with EduSprout"
                : "Please sign in to your account"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className={styles["Auth-form"]}>
            {isSignUp && (
              <div className={styles["Auth-field"]}>
                <label htmlFor="name">Full Name</label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required={isSignUp}
                />
              </div>
            )}

            <div className={styles["Auth-field"]}>
              <label htmlFor="email">Email Address</label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className={styles["Auth-field"]}>
              <label htmlFor="password">Password</label>
              <div className={styles["Auth-password-wrapper"]}>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
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
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className={styles["Auth-password-wrapper"]}>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
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
              text={loading ? "Loading..." : isSignUp ? "Sign Up" : "Sign In"}
              className={styles["Auth-button"]}
              onClick={
                loading
                  ? undefined
                  : () => handleSubmit(new Event("submit") as any)
              }
            />
          </form>

          <div className={styles["Auth-footer"]}>
            <p>
              {isSignUp ? "Already have an account?" : "Don't have an account?"}
              <button
                type="button"
                onClick={toggleAuthMode}
                className={styles["Auth-toggle"]}
              >
                {isSignUp ? "Sign In" : "Sign Up"}
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
