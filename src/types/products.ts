import type { Category } from "./categories";
import type { Comment } from "./comments";
import type { Language } from "./language";
import type { Major } from "./major";
import type { User } from "./user";

export interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  description: string;
  sellNumber: number;
  discount?: number;
  rating: number;
  category: Category;
  language: Language[];
  values: string[];
  skills: string[];
  comments: Comment[];
  majors: Major[];
  user: User;
}

export const ProductSuggest: any[] = [
  {
    id: "book-004",
    infor: {
      id: "prod-b004",
      title: "Mastering Front-End Development",
      image:
        "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
      price: 69.99,
      description:
        "A comprehensive guide to mastering front-end web development using HTML, CSS, JavaScript, and modern frameworks like React and Vue. Ideal for students and aspiring developers seeking to build solid UI skills.",
      sellNumber: 980,
      discount: 15,
      rating: 4.7,
      comments: [],
      category: {
        id: 3,
        title: "Books",
        iconName: "books",
        slug: "books",
        description: "Educational books and literature",
      },
      language: [{ id: "en", title: "English" }],
      values: [
        "Hands-on examples with real-world UI design challenges.",
        "Includes sections on responsive design, accessibility, and performance optimization.",
        "Updated with the latest industry trends and tools.",
      ],
      skills: ["HTML", "CSS", "JavaScript", "React", "UI/UX"],
      majors: [],
      user: {
        id: "user-002",
        name: "WebDev Mastery Inc.",
        email: "contact@webdevmastery.io",
        phone: "0987654321",
        image:
          "https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg",
      },
    },
    authors: ["Jane Doe", "David Nguyen"],
    publisher: ["Modern Coding Press"],
    publicationYear: "2024",
    ebookUrl: "https://example.com/ebook/mastering-frontend",
    createdAt: "2025-06-10T09:15:00Z",
    updatedAt: "2025-07-01T11:45:00Z",
  },
  {
    id: "course-005",
    infor: {
      id: "prod-005",
      title: "Understanding Human Behavior through Sociology",
      image:
        "https://images.pexels.com/photos/3184407/pexels-photo-3184407.jpeg",
      price: 109.0,
      description:
        "Explore the foundations of sociology and learn how social structures, norms, and cultures shape human behavior.",
      sellNumber: 410,
      discount: 0.15,
      rating: 4.8,
      category: {
        id: 1,
        title: "Courses",
        iconName: "course",
        slug: "courses",
        description: "Online courses and tutorials",
      },
      comments: [],
      majors: [
        {
          id: 6,
          title: "Sociology",
          description:
            "Sociology is the study of social life, groups, and societies.",
        },
      ],
      language: [{ id: "en", title: "English" }],
      values: [
        "Introduction to key sociological concepts like norms, roles, and institutions.",
        "Real-world examples and case studies in social behavior.",
        "Encourages critical thinking about society and the individual.",
      ],
      skills: [
        "Critical Thinking",
        "Cultural Awareness",
        "Group Behavior Analysis",
      ],
      user: {
        id: "user-005",
        name: "SocialSphere Institute",
        email: "hello@socialsphere.io",
        phone: "9876543210",
        image:
          "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
      },
    },
    introVideoUrl:
      "https://videos.pexels.com/video-files/3184407/3184407-hd.mp4",
    chapters: [
      {
        id: "ch1",
        title: "Introduction to Sociology",
        description: "Social structures and norms",
      },
      {
        id: "ch2",
        title: "The Self in Society",
        description: "Identity, interaction, and roles",
      },
      {
        id: "ch3",
        title: "Institutions and Power",
        description: "Family, education, government, and inequality",
      },
    ],
    time: "5 months",
    createdAt: "2025-05-20",
    updatedAt: "2025-07-10",
  },
];
