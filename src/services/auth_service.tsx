import type { User } from "@/types/user";
import React, { createContext, useContext, useState, useEffect } from "react";
import { initializeRecommendationService } from "../lib/recommendationUtils";

interface AuthServiceType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  signOut: () => void;
}

const AuthService = createContext<AuthServiceType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthService);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  // Check if user is already logged in (from localStorage)
  const checkAuthStatus = () => {
    try {
      const savedUser = localStorage.getItem("user");
      const token = localStorage.getItem("authToken");

      if (savedUser && token) {
        const userData = JSON.parse(savedUser);
        setUser(userData);
        // Initialize recommendation service with user ID
        initializeRecommendationService(userData.id);
      } else {
        // Initialize recommendation service for anonymous user
        initializeRecommendationService(null);
      }
    } catch (error) {
      console.error("Error checking auth status:", error);
      localStorage.removeItem("user");
      localStorage.removeItem("authToken");
      // Initialize recommendation service for anonymous user
      initializeRecommendationService(null);
    } finally {
      setIsLoading(false);
    }
  };

  const signIn = async (email: string, password: string): Promise<void> => {
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock authentication logic
      if (email === "john.doe@example.com" && password === "password") {
        const userData: User = {
          id: "user-0001",
          image:
            "https://media.istockphoto.com/id/2219371361/vi/anh/%E1%BA%A3nh-anh-ch%C3%A0ng-h%E1%BA%A5p-d%E1%BA%ABn-m%E1%BA%B7c-%C3%A1o-chui-%C4%91%E1%BA%A7u-m%C3%A0u-tr%E1%BA%AFng-cho-th%E1%BA%A5y-hai-ng%C3%B3n-tay-c%C3%A1i-gi%C6%A1-l%C3%AAn-n%E1%BB%81n-m%C3%A0u-cam.jpg?s=2048x2048&w=is&k=20&c=FYsw4YWSII9FA13L5ajub3lWhAbNVpR5tH8OZB4e3Hw=",
          name: "John Doe",
          phone: "1234567890",
          email: "john.doe@example.com",
        };

        // Save to localStorage
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("authToken", "mock-jwt-token");

        setUser(userData);
        // Initialize recommendation service with user ID
        initializeRecommendationService(userData.id);
      } else {
        throw new Error("Mật khẩu hoặc email không chính xác");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (
    name: string,
    email: string,
    password: string
  ): Promise<void> => {
    console.log("signUp", name, email, password);
  };

  const signOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("authToken");
    setUser(null);
    // Initialize recommendation service for anonymous user
    initializeRecommendationService(null);
    window.location.reload();
  };

  const value: AuthServiceType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    signIn,
    signUp,
    signOut,
  };

  return <AuthService.Provider value={value}>{children}</AuthService.Provider>;
};
