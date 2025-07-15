import type { Book } from "../types/book";
import type { Course } from "../types/course";
import type { Document } from "../types/documents";
import type { Language } from "../types/language";
import type { Major } from "../types/major";

export interface FilterOptions {
  majors?: Major[];
  language?: Language | null;
  minPrice?: number;
  maxPrice?: number;
}

export function filterProducts(
  products: Book[] | Course[] | Document[],
  options: FilterOptions
): Book[] | Course[] | Document[] {
  return products.filter((product) => {
    const { majors, minPrice, maxPrice } = options;

    // Major filter - if majors are selected, product must have at least one matching major
    if (majors && majors.length > 0) {
      // If the only selected major is 'ALL', skip major filtering
      if (!(majors.length === 1 && majors[0].code === "ALL")) {
        const hasMatchingMajor = product.infor.majors?.some((productMajor) =>
          majors.some(
            (selectedMajor) => selectedMajor.code === productMajor.code
          )
        );
        if (!hasMatchingMajor) return false;
      }
    }

    // Price filter with validation
    const price = product.infor.price;

    // Ensure price is a valid number
    if (typeof price !== "number" || isNaN(price)) {
      return false;
    }

    // Apply price filters only if they are valid numbers
    if (typeof minPrice === "number" && !isNaN(minPrice) && price < minPrice) {
      return false;
    }

    if (typeof maxPrice === "number" && !isNaN(maxPrice) && price > maxPrice) {
      return false;
    }

    return true;
  });
}
