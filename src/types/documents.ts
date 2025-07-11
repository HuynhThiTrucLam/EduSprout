// Define Document interface to match the structure
export interface Document {
  id: string;
  infor: {
    id: string;
    title: string;
    image: string;
    price: number;
    description: string;
    sellNumber: number;
    discount: number;
    rating: number;
    comments: any[];
    category: {
      id: number;
      title: string;
      iconName: string;
      slug: string;
      description: string;
    };
    language: Array<{ id: string; title: string }>;
    values: string[];
    skills: string[];
    majors: any[];
    user: {
      id: string;
      name: string;
      email: string;
      phone: string;
      image: string;
    };
  };
  academicYear: string;
  createdAt: string;
  updatedAt: string;
}
