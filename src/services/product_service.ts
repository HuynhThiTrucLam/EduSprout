import { mockBooks } from "../types/book";
import { mockCourses } from "./../types/course";

// Mock documents data (you can replace this with actual data)
const mockDocuments = [
  {
    id: "doc-001",
    infor: {
      id: "prod-d001",
      title: "Sample Document 1",
      image: "https://example.com/images/doc1.jpg",
      price: 15.99,
      description: "Educational document for study",
      sellNumber: 500,
      discount: 0,
      rating: 4.2,
      comments: [],
      category: {
        id: 2,
        title: "Documents",
        iconName: "document",
        slug: "documents",
        description: "Educational documents and materials",
      },
      language: [{ id: "en", title: "English" }],
      values: ["Problem Solving", "Technical Knowledge"],
      skills: ["Documentation", "Research"],
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
    id: "doc-002",
    infor: {
      id: "prod-d002",
      title: "Sample Document 2",
      image: "https://example.com/images/doc2.jpg",
      price: 12.99,
      description: "Study material for students",
      sellNumber: 300,
      discount: 5,
      rating: 4.0,
      comments: [],
      category: {
        id: 2,
        title: "Documents",
        iconName: "document",
        slug: "documents",
        description: "Educational documents and materials",
      },
      language: [{ id: "en", title: "English" }],
      values: ["Problem Solving", "Technical Knowledge"],
      skills: ["Documentation", "Research"],
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
];

//get all Course
export const getAllCoursesService = async () => {
  try {
    const response = mockCourses;
    return response;
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
};

export const getAllBooksService = async () => {
  try {
    const response = mockBooks;
    return response;
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

export const getAllDocumentsService = async () => {
  try {
    const response = mockDocuments;
    return response;
  } catch (error) {
    console.error("Error fetching documents:", error);
    return [];
  }
};
