import type { User } from "./user";

export interface Comment {
  id: number;
  user: User;
  content: string;
  rating: number;
  createdAt: string;
  updatedAt: string;
}
