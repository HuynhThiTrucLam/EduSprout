import type { Product } from "./products";

export interface Book {
  id: string;
  infor: Product;

  authors: string[];
  publisher: string[]; //can be multiple publishers
  publicationYear: string; //if the book is for a specific academic year
  ebookUrl: string;

  createdAt: string;
  updatedAt: string;
}

export const mockBooks: Book[] = [
  {
    id: "book-001",
    infor: {
      id: "prod-b001",
      title: "Fundamentals of Information Technology",
      image:
        "https://images.pexels.com/photos/3747279/pexels-photo-3747279.jpeg",
      price: 59.99,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      sellNumber: 1500,
      discount: 10,
      rating: 4.5,
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
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      ],
      skills: ["Networking", "SQL", "Python Basics"],
      majors: [],
      user: {
        id: "user-001",
        name: "CreativeDesign Co.",
        email: "hello@creativedesign.co",
        phone: "1234567890",
        image:
          "https://images.pexels.com/photos/32951574/pexels-photo-32951574.jpeg",
      },
    },
    authors: ["Dr. John Smith", "Prof. Sarah Johnson"],
    publisher: ["Tech Publications", "Academic Press"],
    publicationYear: "2025",
    ebookUrl: "https://example.com/ebook/fundamentals-it",
    createdAt: "2025-05-15T10:00:00Z",
    updatedAt: "2025-06-01T08:30:00Z",
  },
  {
    id: "book-002",
    infor: {
      id: "prod-b002",
      title: "Principles of Business Management",
      image:
        "https://images.pexels.com/photos/7821487/pexels-photo-7821487.jpeg",
      price: 69.0,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      sellNumber: 2000,
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
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      ],
      skills: ["Networking", "SQL", "Python Basics"],
      majors: [],
      user: {
        id: "user-001",
        name: "CreativeDesign Co.",
        email: "hello@creativedesign.co",
        phone: "1234567890",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAJR1WWvAmcjGC5Vo76-V3Q2_cE34eI9ZPuQ&s",
      },
    },
    authors: ["Dr. Michael Brown", "Prof. Lisa Davis"],
    publisher: ["Business Books Inc.", "Management Press"],
    publicationYear: "2024",
    ebookUrl: "https://example.com/ebook/business-management",
    createdAt: "2024-08-10T09:45:00Z",
    updatedAt: "2025-01-05T12:00:00Z",
  },
  {
    id: "book-003",
    infor: {
      id: "prod-b003",
      title: "Introduction to Environmental Science",
      image:
        "https://images.pexels.com/photos/32894584/pexels-photo-32894584.jpeg",
      price: 54.5,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      sellNumber: 1200,
      discount: 5,
      rating: 4.6,
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
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      ],
      skills: ["Networking", "SQL", "Python Basics"],
      majors: [],
      user: {
        id: "user-001",
        name: "CreativeDesign Co.",
        email: "hello@creativedesign.co",
        phone: "1234567890",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAJR1WWvAmcjGC5Vo76-V3Q2_cE34eI9ZPuQ&s",
      },
    },
    authors: ["Dr. Emily Wilson", "Prof. Robert Green"],
    publisher: ["Environmental Studies Press", "Science Publications"],
    publicationYear: "2025",
    ebookUrl: "https://example.com/ebook/environmental-science",
    createdAt: "2025-06-20T11:15:00Z",
    updatedAt: "2025-07-01T09:00:00Z",
  },
  {
    id: "book-004",
    infor: {
      id: "prod-b004",
      title: "Mastering Front-End Development",
      image:
        "https://m.media-amazon.com/images/I/71jLZu9sC3L._UF350,350_QL50_.jpg",
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
    id: "book-004",
    infor: {
      id: "prod-b004",
      title: "The Art of Public Speaking",
      image:
        "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg",
      price: 42.99,
      description:
        "A timeless guide to mastering the skill of speaking in public with confidence and clarity.",
      sellNumber: 1340,
      discount: 5,
      rating: 4.6,
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
        "Learn persuasive communication techniques.",
        "Practical examples and exercises to improve stage presence.",
        "Confidence-building tips for introverts.",
      ],
      skills: ["Communication", "Presentation", "Leadership"],
      majors: [],
      user: {
        id: "user-005",
        name: "Speaker Academy",
        email: "info@speakeracademy.com",
        phone: "1112223333",
        image:
          "https://images.pexels.com/photos/3184335/pexels-photo-3184335.jpeg",
      },
    },
    authors: ["Dale Carnegie"],
    publisher: ["Speaking Edge Publishing"],
    publicationYear: "2023",
    ebookUrl: "https://example.com/ebook/public-speaking",
    createdAt: "2025-05-10T09:30:00Z",
    updatedAt: "2025-06-20T11:00:00Z",
  },
  {
    id: "book-005",
    infor: {
      id: "prod-b005",
      title: "Data Structures & Algorithms in JavaScript",
      image:
        "https://images.pexels.com/photos/11035324/pexels-photo-11035324.jpeg",
      price: 54.5,
      description:
        "A practical book to help developers learn and implement data structures in JavaScript effectively.",
      sellNumber: 890,
      discount: 12,
      rating: 4.8,
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
        "Covers linked lists, stacks, queues, trees, and graphs.",
        "Includes hands-on coding challenges and solutions.",
        "Optimized for frontend and backend dev interviews.",
      ],
      skills: [
        "JavaScript",
        "Problem Solving",
        "Algorithms",
        "Coding Interviews",
      ],
      majors: [],
      user: {
        id: "user-006",
        name: "DevTech Publishers",
        email: "books@devtech.io",
        phone: "4455667788",
        image:
          "https://images.pexels.com/photos/11035318/pexels-photo-11035318.jpeg",
      },
    },
    authors: ["Alice Nguyen", "Thomas Gray"],
    publisher: ["DevTech Publishing"],
    publicationYear: "2024",
    ebookUrl: "https://example.com/ebook/dsa-js",
    createdAt: "2025-06-05T12:00:00Z",
    updatedAt: "2025-07-01T13:00:00Z",
  },
  {
    id: "book-006",
    infor: {
      id: "prod-b006",
      title: "Emotional Intelligence 101",
      image:
        "https://images.pexels.com/photos/5709010/pexels-photo-5709010.jpeg",
      price: 47.0,
      description:
        "An introductory book on understanding emotions, self-regulation, and empathy for personal growth.",
      sellNumber: 1120,
      discount: 10,
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
        "Learn to recognize and manage your emotions.",
        "Develop empathy and build better relationships.",
        "Includes exercises and reflection prompts.",
      ],
      skills: ["Self-awareness", "Empathy", "Emotional Regulation"],
      majors: [],
      user: {
        id: "user-007",
        name: "MindGrow Publications",
        email: "hello@mindgrow.io",
        phone: "9991112222",
        image:
          "https://images.pexels.com/photos/5709012/pexels-photo-5709012.jpeg",
      },
    },
    authors: ["Sophia Tran"],
    publisher: ["MindGrow"],
    publicationYear: "2025",
    ebookUrl: "https://example.com/ebook/eq-101",
    createdAt: "2025-06-20T10:45:00Z",
    updatedAt: "2025-07-12T08:20:00Z",
  },
];

export const mockFavoriteBooks: Book[] = [mockBooks[0]];
