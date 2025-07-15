import { mockDocuments } from "../types/documents";
import { mockBooks, mockFavoriteBooks } from "../types/book";
import { mockCourses, mockFinishedCourses } from "./../types/course";
import { mockFavorites } from "../types/favorite";

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
export const getAllFavoriteService = async () => {
  try {
    const response = mockFavorites;
    console.log("responseFavorite", response);
    return response;
  } catch (error) {
    console.error("Error fetching favorite courses:", error);
    return [];
  }
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

//filter products
export const filterProductsService = async (
  typeOfProduct: string,
  selectedMajorId?: string | null,
  selectedLanguageId?: string | null,
  minPrice?: number,
  maxPrice?: number
) => {
  try {
    //wait 2 seconds
    await new Promise((resolve) => setTimeout(resolve, 2000));

    switch (typeOfProduct) {
      case "course":
        // filter courses by major and language and price
        console.log("Filtering courses with:", {
          selectedMajorId,
          selectedLanguageId,
          minPrice,
          maxPrice,
        });
        const filteredCourses = mockCourses.filter((course) => {
          const majorMatch =
            !selectedMajorId ||
            selectedMajorId === "0" ||
            course.infor.majors.some(
              (major) => major.id.toString() === selectedMajorId
            );

          const languageMatch =
            !selectedLanguageId ||
            selectedLanguageId === "0" ||
            course.infor.language.some(
              (lang) => lang.id === selectedLanguageId
            );

          let priceMatch = true;
          if (typeof minPrice === "number" && minPrice > 0) {
            priceMatch = priceMatch && course.infor.price >= minPrice;
          }
          if (typeof maxPrice === "number" && maxPrice > 0) {
            priceMatch = priceMatch && course.infor.price <= maxPrice;
          }

          console.log(`Course ${course.infor.title}:`, {
            majorMatch,
            languageMatch,
            priceMatch,
            price: course.infor.price,
          });
          return majorMatch && languageMatch && priceMatch;
        });
        console.log("Filtered courses count:", filteredCourses.length);
        return filteredCourses;
      case "book":
        // filter books by major and language and price
        const filteredBooks = mockBooks.filter((book) => {
          const majorMatch =
            !selectedMajorId ||
            selectedMajorId === "0" ||
            book.infor.majors.some(
              (major) => major.id.toString() === selectedMajorId
            );

          const languageMatch =
            !selectedLanguageId ||
            selectedLanguageId === "0" ||
            book.infor.language.some((lang) => lang.id === selectedLanguageId);

          let priceMatch = true;
          if (typeof minPrice === "number" && minPrice > 0) {
            priceMatch = priceMatch && book.infor.price >= minPrice;
          }
          if (typeof maxPrice === "number" && maxPrice > 0) {
            priceMatch = priceMatch && book.infor.price <= maxPrice;
          }

          return majorMatch && languageMatch && priceMatch;
        });
        return filteredBooks;
      case "document":
        // filter documents by major and language and price
        const filteredDocuments = mockDocuments.filter((document) => {
          const majorMatch =
            !selectedMajorId ||
            selectedMajorId === "0" ||
            document.infor.majors.some(
              (major) => major.id.toString() === selectedMajorId
            );

          const languageMatch =
            !selectedLanguageId ||
            selectedLanguageId === "0" ||
            document.infor.language.some(
              (lang) => lang.id === selectedLanguageId
            );

          let priceMatch = true;
          if (typeof minPrice === "number" && minPrice > 0) {
            priceMatch = priceMatch && document.infor.price >= minPrice;
          }
          if (typeof maxPrice === "number" && maxPrice > 0) {
            priceMatch = priceMatch && document.infor.price <= maxPrice;
          }

          return majorMatch && languageMatch && priceMatch;
        });
        return filteredDocuments;
      default:
        return [];
    }
  } catch (error) {
    console.error("Error filtering products:", error);
    return [];
  }
};

//suggest products
export const suggestProductsService = async () => {
  try {
  } catch (error) {
    console.error("Error fetching suggest products:", error);
    return [];
  }
};

//search products
export const searchProductsService = async (
  typeOfProduct: string,
  query: string
) => {
  try {
    const lowerQuery = query.toLowerCase();
    if (typeOfProduct === "courses") {
      const response = mockCourses.filter((course) =>
        course.infor.title.toLowerCase().includes(lowerQuery)
      );
      return response;
    } else if (typeOfProduct === "books") {
      const response = mockBooks.filter((book) =>
        book.infor.title.toLowerCase().includes(lowerQuery)
      );
      return response;
    } else if (typeOfProduct === "documents") {
      const response = mockDocuments.filter((document) =>
        document.infor.title.toLowerCase().includes(lowerQuery)
      );
      return response;
    }
    return [];
  } catch (error) {
    console.error("Error searching products:", error);
    return [];
  }
};
