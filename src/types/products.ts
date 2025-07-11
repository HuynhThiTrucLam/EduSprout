import type { Category } from "./categories";
import type { Comment } from "./comments";
import type { Language } from "./language";
import type { Major } from "./major";
import type { User } from "./user";

export interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  description: string;
  sellNumber: number;
  discount?: number;
  rating: number;
  category: Category;
  language: Language[];
  values: string[];
  skills: string[];
  comments: Comment[];
  majors: Major[];
  user: User;
}
