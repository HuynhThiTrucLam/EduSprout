export interface Category {
  id: number;
  title: string;
  iconName: IconName;
  slug: string;
  description?: string;
  isActive?: boolean;
}

export type IconName =
  | "document"
  | "course"
  | "books"
  | "search"
  | "cart"
  | "notification"
  | "language"
  | "arrow"
  | "decorate1"
  | "decorate2"
  | "decorate3"
  | "decorate4"
  | "introDecorate";

export const categories: Category[] = [
  {
    id: 1,
    title: "Courses",
    iconName: "course",
    slug: "course",
    description: "Online courses and tutorials",
  },

  {
    id: 2,
    title: "Books",
    iconName: "books",
    slug: "books",
    description: "Educational books and literature",
  },
  {
    id: 3,
    title: "Documents",
    iconName: "document",
    slug: "documents",
    description: "Educational documents and materials",
  },
];
