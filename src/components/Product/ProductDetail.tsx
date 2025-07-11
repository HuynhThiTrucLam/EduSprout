import type { Course } from "../../types/course";
import type { Book } from "../../types/book";
import type { Document } from "../../types/documents";

interface ProductdetailProps {
  productInfor: Course | Book | Document;
}

const Productdetail = ({ productInfor }: ProductdetailProps) => {
  return <div></div>;
};

export default Productdetail;
