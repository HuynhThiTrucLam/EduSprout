import type { Product } from "./products";

export interface Book {
  id: string;
  infor: Product;

  authors: string[];
  publisher: string[]; //can be multiple publishers
  publicationYear: string; //if the book is for a specific academic year
  ebookUrl: string;

  createdAt: string;
  updatedAt: string;
}

export const mockBooks: Book[] = [
  {
    id: "book-001",
    infor: {
      id: "prod-b001",
      title: "Fundamentals of Information Technology",
      image:
        "https://images.pexels.com/photos/3747279/pexels-photo-3747279.jpeg",
      price: 59.99,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
      values: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      ],
      skills: ["Networking", "SQL", "Python Basics"],
      majors: [],
      user: {
        id: "user-001",
        name: "CreativeDesign Co.",
        email: "hello@creativedesign.co",
        phone: "1234567890",
        image:
          "https://images.pexels.com/photos/32951574/pexels-photo-32951574.jpeg",
      },
    },
    authors: ["Dr. John Smith", "Prof. Sarah Johnson"],
    publisher: ["Tech Publications", "Academic Press"],
    publicationYear: "2025",
    ebookUrl: "https://example.com/ebook/fundamentals-it",
    createdAt: "2025-05-15T10:00:00Z",
    updatedAt: "2025-06-01T08:30:00Z",
  },
  {
    id: "book-002",
    infor: {
      id: "prod-b002",
      title: "Principles of Business Management",
      image:
        "https://images.pexels.com/photos/7821487/pexels-photo-7821487.jpeg",
      price: 69.0,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
      values: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      ],
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
    authors: ["Dr. Michael Brown", "Prof. Lisa Davis"],
    publisher: ["Business Books Inc.", "Management Press"],
    publicationYear: "2024",
    ebookUrl: "https://example.com/ebook/business-management",
    createdAt: "2024-08-10T09:45:00Z",
    updatedAt: "2025-01-05T12:00:00Z",
  },
  {
    id: "book-003",
    infor: {
      id: "prod-b003",
      title: "Introduction to Environmental Science",
      image:
        "https://images.pexels.com/photos/32894584/pexels-photo-32894584.jpeg",
      price: 54.5,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
      values: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      ],
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
    authors: ["Dr. Emily Wilson", "Prof. Robert Green"],
    publisher: ["Environmental Studies Press", "Science Publications"],
    publicationYear: "2025",
    ebookUrl: "https://example.com/ebook/environmental-science",
    createdAt: "2025-06-20T11:15:00Z",
    updatedAt: "2025-07-01T09:00:00Z",
  },
];
