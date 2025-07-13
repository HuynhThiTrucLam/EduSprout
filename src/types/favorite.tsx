export interface Favorite {
  id: string;
  productId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export const mockFavorites: Favorite[] = [
  {
    id: "1",
    productId: "course-001",
    userId: "user-0001",
    createdAt: "2021-01-01",
    updatedAt: "2021-01-01",
  },
  {
    id: "2",
    productId: "book-001",
    userId: "user-0001",
    createdAt: "2021-01-01",
    updatedAt: "2021-01-01",
  },
];
