import type { Product } from "./products";

export interface Book {
  id: string;
  infor: Product;

  academicYear: string; //if the book is for a specific academic year
  createdAt: string;
  updatedAt: string;
}

export const mockBooks: Book[] = [
  {
    id: "book-001",
    infor: {
      id: "prod-b001",
      title: "Fundamentals of Information Technology",
      image: "https://example.com/images/it-book.jpg",
      price: 59.99,
      description:
        "A comprehensive textbook for learning foundational IT concepts and skills.",
      sellNumber: 1500,
      discount: 10,
      rating: 4.5,
      comments: [],
      category: {
        id: 3,
        title: "Books",
        iconName: "books",
        slug: "books",
        description: "Educational books and literature",
      },
      language: [{ id: "en", title: "English" }],
      values: ["Problem Solving", "Technical Knowledge", "Security Awareness"],
      skills: ["Networking", "SQL", "Python Basics"],
      majors: [],
      user: {
        id: "user-001",
        name: "CreativeDesign Co.",
        email: "hello@creativedesign.co",
        phone: "1234567890",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAJR1WWvAmcjGC5Vo76-V3Q2_cE34eI9ZPuQ&s",
      },
    },
    academicYear: "2025-2026",
    createdAt: "2025-05-15T10:00:00Z",
    updatedAt: "2025-06-01T08:30:00Z",
  },
  {
    id: "book-002",
    infor: {
      id: "prod-b002",
      title: "Principles of Business Management",
      image: "https://example.com/images/business-book.jpg",
      price: 69.0,
      description:
        "An essential guide to business administration, covering theories and real-world applications.",
      sellNumber: 2000,
      discount: 15,
      rating: 4.7,
      comments: [],
      category: {
        id: 3,
        title: "Books",
        iconName: "books",
        slug: "books",
        description: "Educational books and literature",
      },
      language: [{ id: "en", title: "English" }],
      values: ["Problem Solving", "Technical Knowledge", "Security Awareness"],
      skills: ["Networking", "SQL", "Python Basics"],
      majors: [],
      user: {
        id: "user-001",
        name: "CreativeDesign Co.",
        email: "hello@creativedesign.co",
        phone: "1234567890",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAJR1WWvAmcjGC5Vo76-V3Q2_cE34eI9ZPuQ&s",
      },
    },
    academicYear: "2024-2025",
    createdAt: "2024-08-10T09:45:00Z",
    updatedAt: "2025-01-05T12:00:00Z",
  },
  {
    id: "book-003",
    infor: {
      id: "prod-b003",
      title: "Introduction to Environmental Science",
      image: "https://example.com/images/env-sci-book.jpg",
      price: 54.5,
      description:
        "Explore the fundamental concepts of ecology, sustainability, and environmental challenges.",
      sellNumber: 1200,
      discount: 5,
      rating: 4.6,
      comments: [],
      category: {
        id: 3,
        title: "Books",
        iconName: "books",
        slug: "books",
        description: "Educational books and literature",
      },
      language: [{ id: "en", title: "English" }],
      values: ["Problem Solving", "Technical Knowledge", "Security Awareness"],
      skills: ["Networking", "SQL", "Python Basics"],
      majors: [],
      user: {
        id: "user-001",
        name: "CreativeDesign Co.",
        email: "hello@creativedesign.co",
        phone: "1234567890",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAJR1WWvAmcjGC5Vo76-V3Q2_cE34eI9ZPuQ&s",
      },
    },
    academicYear: "2025-2026",
    createdAt: "2025-06-20T11:15:00Z",
    updatedAt: "2025-07-01T09:00:00Z",
  },
];
