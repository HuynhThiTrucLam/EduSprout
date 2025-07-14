import type { Book } from "../types/book";
import type { Course } from "../types/course";
import type { Document } from "../types/documents";
import type { Language } from "../types/language";
import type { Major } from "../types/major";

export interface FilterOptions {
  major?: Major | null;
  language?: Language | null;
  minPrice?: number;
  maxPrice?: number;
}

export function filterProducts(
  products: Book[] | Course[] | Document[],
  options: FilterOptions
): Book[] | Course[] | Document[] {
  return products.filter((product) => {
    const { major, language, minPrice, maxPrice } = options;

    // Major filter
    if (
      major &&
      major.title !== "All" &&
      product.infor.majors?.some((m) => m.id === major.id)
    ) {
      return false;
    }

    // Language filter
    if (
      language &&
      language.title !== "All" &&
      product.infor.language?.some((l) => l.id === language.id)
    ) {
      return false;
    }

    // Price filter
    const price = product.infor.price;
    if (typeof minPrice === "number" && price < minPrice) return false;
    if (typeof maxPrice === "number" && price > maxPrice) return false;

    return true;
  });
}
