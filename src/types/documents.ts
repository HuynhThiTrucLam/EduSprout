import type { Product } from "./products";
export interface Document {
  id: string;
  infor: Product;

  academicYear?: string;
  createdAt: string;
  updatedAt: string;
}

export const mockDocuments: Document[] = [];
