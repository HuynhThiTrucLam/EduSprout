import type { Product } from "./products";

// Define Document interface to match the structure
export interface Document {
  id: string;
  infor: Product;

  academicYear?: string;
  createdAt: string;
  updatedAt: string;
}

export const mockDocuments: Document[] = [];
