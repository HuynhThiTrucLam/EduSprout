import { mockDocuments } from "../types/documents";
import { mockBooks, mockFavoriteBooks } from "../types/book";
import { mockCourses, mockFinishedCourses } from "./../types/course";

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

//get course by id
export const getCourseByIdService = async (id: string) => {
  try {
    //using mock data
    // console.log("Get course by id:", id);
    const response = mockCourses.find((course) => course.id === id);
    return response;
  } catch (error) {
    console.error("Error fetching course by id:", error);
    return null;
  }
};

//get all finished courses
export const getAllFinishedCoursesService = async () => {
  try {
    //using mock data
    const response = mockFinishedCourses;
    return response;
  } catch (error) {
    console.error("Error fetching finished courses:", error);
    return [];
  }
};

//get all favorite courses
export const getAllFavoriteCoursesService = async () => {
  return [];
};

//get all in progress courses
export const getAllInProgressCoursesService = async () => {
  return [];
};

//get similar courses
export const getSimilarProductService = async (typeOfProduct: string) => {
  try {
    //call api get similar products
    //but using mock data
    if (typeOfProduct === "courses") {
      const response = mockCourses;
      return response;
    } else if (typeOfProduct === "books") {
      const response = mockBooks;
      return response;
    } else if (typeOfProduct === "documents") {
      const response = mockDocuments;
      return response;
    }
  } catch (error) {
    console.error("Error fetching similar courses:", error);
    return [];
  }
};

//get all books
export const getAllBooksService = async () => {
  try {
    const response = mockBooks;
    return response;
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

//get book by id
export const getBookByIdService = async (id: string) => {
  try {
    const response = mockBooks.find((book) => book.id === id);
    return response;
  } catch (error) {
    console.error("Error fetching book by id:", error);
    return null;
  }
};

//get all favorite books
export const getAllFavoriteBooksService = async () => {
  try {
    const response = mockFavoriteBooks;
    return response;
  } catch (error) {
    console.error("Error fetching favorite books:", error);
    return [];
  }
};

//get all documents
export const getAllDocumentsService = async () => {
  try {
    const response = mockDocuments;
    return response;
  } catch (error) {
    console.error("Error fetching documents:", error);
    return [];
  }
};

//get document by id
export const getDocumentByIdService = async (id: string) => {
  try {
    const response = mockDocuments.find((document) => document.id === id);
    return response;
  } catch (error) {
    console.error("Error fetching document by id:", error);
    return null;
  }
};

//get all favorite documents
export const getAllFavoriteDocumentsService = async () => {
  return [];
};
