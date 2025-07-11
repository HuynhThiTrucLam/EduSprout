import { mockDocuments } from "../types/documents";
import { mockBooks } from "../types/book";
import { mockCourses } from "./../types/course";

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
