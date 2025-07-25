import type { Book } from "./book";
import type { Course } from "./course";

export interface Favorite {
  id: string;
  product: Course | Book | Document;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export const mockFavorites: Favorite[] = [
  {
    id: "1",
    product: {
      id: "course-001",
      infor: {
        id: "prod-001",
        title: "Mastering UI/UX Design",
        image:
          "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg",
        price: 199.99,
        description:
          "Learn to design stunning and user-friendly digital interfaces from scratch.",
        sellNumber: 230,
        discount: 0.15,
        rating: 4.8,
        category: {
          id: 1,
          title: "Courses",
          iconName: "course",
          slug: "courses",
          description: "Online courses and tutorials",
        },
        comments: [
          {
            id: 1,
            user: {
              id: "user-101",
              name: "John Doe",
              email: "john.doe@example.com",
              phone: "1234567890",
              image:
                "https://plus.unsplash.com/premium_photo-1682787494977-d013bb5a8773?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y291cnNlfGVufDB8fDB8fHww",
            },
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            rating: 5,
            createdAt: "2025-06-01T10:15:00Z",
            updatedAt: "2025-06-01T10:15:00Z",
          },
          {
            id: 2,
            user: {
              id: "user-102",
              name: "John Doe",
              email: "john.doe@example.com",
              phone: "1234567890",
              image:
                "https://plus.unsplash.com/premium_photo-1682787494977-d013bb5a8773?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y291cnNlfGVufDB8fDB8fHww",
            },
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            rating: 4,
            createdAt: "2025-06-03T08:40:00Z",
            updatedAt: "2025-06-03T08:40:00Z",
          },
          {
            id: 3,
            user: {
              id: "user-103",
              name: "John Doe",
              email: "john.doe@example.com",
              phone: "1234567890",
              image:
                "https://plus.unsplash.com/premium_photo-1682787494977-d013bb5a8773?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y291cnNlfGVufDB8fDB8fHww",
            },
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            rating: 5,
            createdAt: "2025-06-05T13:30:00Z",
            updatedAt: "2025-06-05T13:30:00Z",
          },
          {
            id: 4,
            user: {
              id: "user-104",
              name: "John Doe",
              email: "john.doe@example.com",
              phone: "1234567890",
              image:
                "https://plus.unsplash.com/premium_photo-1682787494977-d013bb5a8773?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y291cnNlfGVufDB8fDB8fHww",
            },
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            rating: 3,
            createdAt: "2025-06-07T09:20:00Z",
            updatedAt: "2025-06-07T09:20:00Z",
          },
          {
            id: 5,
            user: {
              id: "user-105",
              name: "John Doe",
              email: "john.doe@example.com",
              phone: "1234567890",
              image:
                "https://plus.unsplash.com/premium_photo-1682787494977-d013bb5a8773?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y291cnNlfGVufDB8fDB8fHww",
            },
            content:
              "Awesome! The interactive elements really helped me stay engaged.",
            rating: 5,
            createdAt: "2025-06-10T14:45:00Z",
            updatedAt: "2025-06-10T14:45:00Z",
          },
        ],
        majors: [
          {
            id: 1,
            title: "UI/UX Design",
            code: "UIUX",
            description:
              "UI/UX Design is the practice of designing user-friendly and engaging digital experiences",
          },
          {
            id: 2,
            title: "Information Technology",
            code: "IT",
            description:
              "Information Technology focuses on managing and supporting computer systems, networks, and data.",
          },
        ],
        language: [{ id: "en", title: "English" }],
        values: [
          "Creativity is the ability to think outside the box and come up with new ideas.",
          "Empathy is the ability to understand and share the feelings of others.",
          "Design Thinking is a process for solving problems by understanding the user's needs and creating a solution that meets those needs.",
          "User Research is the process of gathering information about users to help design a product that meets their needs.",
          "User Experience is the overall experience of using a product.",
          "User Interface is the visual and interactive elements of a product.",
        ],
        skills: ["Wireframing", "Prototyping", "User Research"],
        user: {
          id: "user-001",
          name: "CreativeDesign Co.",
          email: "hello@creativedesign.co",
          phone: "1234567890",
          image:
            "https://media.istockphoto.com/id/1401921776/vi/anh/ch%C3%A2n-dung-%E1%BA%A3nh-d%C3%A0i-%C4%91%E1%BA%A7y-%C4%91%E1%BB%A7-c%E1%BB%A7a-ng%C6%B0%E1%BB%9Di-%C4%91%C3%A0n-%C3%B4ng-m%E1%BB%B9-nh%E1%BA%A3y-m%C3%BAa-b%E1%BB%8B-c%C3%B4-l%E1%BA%ADp-tr%C3%AAn-n%E1%BB%81n-m%C3%A0u-v%C3%A0ng-s%E1%BB%91ng-%C4%91%E1%BB%99ng.jpg?s=1024x1024&w=is&k=20&c=verM_GeitA4UEjjlRcYsj0ULadPSxl6zI-HeoCKdY84=",
        },
      },
      introVideoUrl:
        "https://d3c33hcgiwev3.cloudfront.net/X4uJy_bFTmGvWNkZxhAXgw.mediaconvert/full/X4uJy_bFTmGvWNkZxhAXgw_bcb6b6db5c844c4f891c9ffb97c917f1_C1M1-Welcome-to-the-Google-UX-Design-Certificate_MP4_540.mp4?Expires=1752451200&Signature=UDJ2lWLwzda2kSvLYTNdms-ZO3Ahd-geA1A8ZZtw5oM7eemsuG7ytlRyKU0rd4JDTO7oK8cAz0mFxfkojsNZBmDBGSnJBdhYX-TtJIji~dsXzU1wDQXqn~sISlWEww-5ktlbFhV5qpItHXO9kQvKhcIswLN9U8joaBNsFcekfB0_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A",
      chapters: [
        {
          id: "ch1",
          title: "Introduction to UI/UX",
          description: "Basics and key concepts",
        },
        {
          id: "ch2",
          title: "Wireframing Tools",
          description: "Explore Figma, Sketch and more",
        },
        {
          id: "ch3",
          title: "User Research",
          description: "Understanding user needs and behaviors",
        },
        {
          id: "ch4",
          title: "Prototyping",
          description: "Creating interactive prototypes",
        },
        {
          id: "ch5",
          title: "Design Principles",
          description: "Principles of good design",
        },
        {
          id: "ch6",
          title: "Design Principles",
          description: "Principles of good design",
        },
        {
          id: "ch7",
          title: "Design Principles",
          description: "Principles of good design",
        },
        {
          id: "ch8",
          title: "Design Principles",
          description: "Principles of good design",
        },
        {
          id: "ch9",
          title: "Design Principles",
          description: "Principles of good design",
        },
      ],
      time: "10 months",

      createdAt: "2025-01-10",
      updatedAt: "2025-05-20",
    },
    userId: "user-0001",
    createdAt: "2021-01-01",
    updatedAt: "2021-01-01",
  },
  {
    id: "2",
    product: {
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
    userId: "user-0001",
    createdAt: "2021-01-01",
    updatedAt: "2021-01-01",
  },
];
