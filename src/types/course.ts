import type { Product } from "./products";

export interface Course {
  id: string;
  infor: Product;

  time: string;
  introVideoUrl: string;
  chapters: Chapter[]; // just see the title and description of the chapter

  createdAt: string;
  updatedAt: string;
}

export type Chapter = {
  id: string;
  title: string;
  description: string;
};

export const mockCourses: Course[] = [
  {
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
          description:
            "UI/UX Design is the practice of designing user-friendly and engaging digital experiences",
        },
        {
          id: 2,
          title: "Information Technology",
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
  {
    id: "course-002",
    infor: {
      id: "prod-002",
      title: "Fullstack IT Fundamentals",
      image:
        "https://plus.unsplash.com/premium_photo-1682787494977-d013bb5a8773?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y291cnNlfGVufDB8fDB8fHww",
      price: 149.99,
      description:
        "Build strong foundations in networks, databases, and programming.",
      sellNumber: 450,
      discount: 0.2,
      rating: 4.7,
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
          id: 2,
          title: "Information Technology",
          description:
            "Information Technology focuses on managing and supporting computer systems, networks, and data.",
        },
      ],
      language: [{ id: "en", title: "English" }],
      values: [
        "Problem Solving Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "Technical Knowledge Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "Security Awareness Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "Design Thinking Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      ],
      skills: ["Networking", "SQL", "Python Basics"],
      user: {
        id: "user-002",
        name: "IT Gurus Inc.",
        email: "support@itgurus.io",
        phone: "1234567890",
        image:
          "https://media.istockphoto.com/id/2148824805/vi/anh/%E1%BA%A3nh-k%C3%ADch-th%C6%B0%E1%BB%9Bc-%C4%91%E1%BA%A7y-%C4%91%E1%BB%A7-c%E1%BB%A7a-ng%C6%B0%E1%BB%9Di-%C4%91%C3%A0n-%C3%B4ng-ng%C3%A2y-ng%E1%BA%A5t-m%E1%BA%B7c-%C3%A1o-s%C6%A1-mi-tr%E1%BA%AFng-qu%E1%BA%A7n-short-tr%E1%BA%AFng-gi%C6%A1-tay.jpg?s=612x612&w=0&k=20&c=1zD-38Ni0dMfSaWzvo19j-wwWa9vdJzXdoo6WC2m-CU=",
      },
    },
    introVideoUrl:
      "https://plus.unsplash.com/premium_photo-1682787494977-d013bb5a8773?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y291cnNlfGVufDB8fDB8fHww",
    chapters: [
      {
        id: "ch1",
        title: "Computing Basics",
        description: "Understand how computers work",
      },
      {
        id: "ch2",
        title: "Introduction to Python",
        description: "Your first coding steps",
      },
    ],
    time: "12 months",
    createdAt: "2025-02-15",
    updatedAt: "2025-06-10",
  },
  {
    id: "course-003",
    infor: {
      id: "prod-003",
      title: "Business Strategy 101",
      image:
        "https://plus.unsplash.com/premium_photo-1682787494977-d013bb5a8773?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y291cnNlfGVufDB8fDB8fHww",
      price: 179.0,
      description:
        "Learn how to craft winning strategies for business growth and innovation.",
      sellNumber: 320,
      discount: 0.1,
      rating: 4.6,
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
          id: 3,
          title: "Business Administration",
          description:
            "Business Administration is the management of business operations and decision-making",
        },
      ],
      language: [{ id: "en", title: "English" }],
      values: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      ],
      skills: ["Networking", "SQL", "Python Basics"],
      user: {
        id: "user-003",
        name: "BizEdge Academy",
        email: "contact@bizedge.ac",
        phone: "1234567890",
        image:
          "https://media.istockphoto.com/id/2220865188/vi/anh/%E1%BA%A3nh-anh-ch%C3%A0ng-thi%C3%AAn-ni%C3%AAn-k%E1%BB%B7-l%E1%BA%A1c-quan-m%E1%BA%B7c-%C3%A1o-s%C6%A1-mi-m%C3%A0u-xanh-l%C3%A1-c%C3%A2y-b%E1%BB%8B-c%C3%B4-l%E1%BA%ADp-tr%C3%AAn-n%E1%BB%81n-m%C3%A0u-v%C3%A0ng.jpg?s=1024x1024&w=is&k=20&c=8xOsDhDEviP7Az2z7yv_QK3qa72_gMe2YhDrjNSo_r0=",
      },
    },
    time: "72 hours",
    introVideoUrl:
      "https://plus.unsplash.com/premium_photo-1682787494977-d013bb5a8773?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y291cnNlfGVufDB8fDB8fHww",
    chapters: [
      {
        id: "ch1",
        title: "Understanding Markets",
        description: "Basic market concepts",
      },
      {
        id: "ch2",
        title: "Strategic Tools",
        description: "Use of frameworks like SWOT, PESTLE",
      },
    ],

    createdAt: "2025-03-12",
    updatedAt: "2025-06-22",
  },
  {
    id: "course-004",
    infor: {
      id: "prod-004",
      title: "Introduction to Psychology",
      image:
        "https://plus.unsplash.com/premium_photo-1682787494977-d013bb5a8773?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y291cnNlfGVufDB8fDB8fHww",
      price: 129.5,
      description: "Delve into human behavior, emotions, and mental processes.",
      sellNumber: 510,
      discount: 0.25,
      rating: 4.9,
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
          id: 4,
          title: "Psychology",
          description:
            "Psychology is the study of the human mind, behavior, and mental processes",
        },
      ],
      language: [{ id: "en", title: "English" }],
      values: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      ],
      skills: [
        "Cognitive Understanding",
        "Behavioral Analysis",
        "Emotional Intelligence",
      ],
      user: {
        id: "user-004",
        name: "MindScope Academy",
        email: "info@mindscope.org",
        phone: "1234567890",
        image:
          "https://media.istockphoto.com/id/2210694199/vi/anh/k%C3%ADch-th%C6%B0%E1%BB%9Bc-%E1%BA%A3nh-d%C3%A0i-%C4%91%E1%BA%A7y-%C4%91%E1%BB%A7-c%C3%A1n-b%E1%BB%99-c%E1%BB%A7a-ch%C3%A0ng-trai-tr%E1%BA%BB-nh%E1%BA%A3y-n%E1%BA%AFm-%C4%91%E1%BA%A5m-l%C3%AAn-%C4%83n-m%E1%BB%ABng-c%C3%B4ng-vi%E1%BB%87c-%C4%91%E1%BA%A7u-ti%C3%AAn.jpg?s=612x612&w=0&k=20&c=HN2i8sjldNMTEXu6Wh7M6Y-jcXVX-Mi0fglZfnjEBtQ=",
      },
    },
    introVideoUrl:
      "https://plus.unsplash.com/premium_photo-1682787494977-d013bb5a8773?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y291cnNlfGVufDB8fDB8fHww",
    chapters: [
      {
        id: "ch1",
        title: "What is Psychology?",
        description: "History and definitions",
      },
      {
        id: "ch2",
        title: "Branches of Psychology",
        description: "Clinical, Cognitive, Developmental",
      },
    ],
    time: "6 months",
    createdAt: "2025-04-18",
    updatedAt: "2025-07-01",
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
  {
    id: "course-006",
    infor: {
      id: "prod-006",
      title: "Data Science for Beginners",
      image:
        "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
      price: 149.0,
      description:
        "Learn the fundamentals of data science, from statistics to Python and real-world analysis.",
      sellNumber: 820,
      discount: 0.2,
      rating: 4.6,
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
          id: 7,
          title: "Data Science",
          description:
            "Study of extracting insights from structured and unstructured data.",
        },
      ],
      language: [{ id: "en", title: "English" }],
      values: [
        "Basic statistics and probability.",
        "Python for data analysis and visualization.",
        "Case studies using real-world datasets.",
      ],
      skills: ["Python", "Statistics", "Pandas", "Data Visualization"],
      user: {
        id: "user-006",
        name: "DataStart Academy",
        email: "contact@datastart.io",
        phone: "1122334455",
        image:
          "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
      },
    },
    introVideoUrl:
      "https://videos.pexels.com/video-files/3183197/3183197-hd.mp4",
    chapters: [
      {
        id: "ch1",
        title: "Intro to Data Science",
        description: "What is data science?",
      },
      {
        id: "ch2",
        title: "Using Python for Analysis",
        description: "Basic programming and data wrangling",
      },
    ],
    time: "4 months",
    createdAt: "2025-06-01",
    updatedAt: "2025-07-10",
  },
  {
    id: "course-007",
    infor: {
      id: "prod-007",
      title: "Effective Communication Skills",
      image:
        "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",
      price: 89.0,
      description:
        "Master verbal and non-verbal communication techniques to enhance personal and professional relationships.",
      sellNumber: 670,
      discount: 0.1,
      rating: 4.5,
      category: {
        id: 1,
        title: "Courses",
        iconName: "course",
        slug: "courses",
        description: "Online courses and tutorials",
      },
      comments: [],
      majors: [],
      language: [{ id: "en", title: "English" }],
      values: [
        "Learn public speaking and active listening.",
        "Improve interpersonal communication.",
        "Practice professional written and verbal interactions.",
      ],
      skills: ["Speaking", "Listening", "Conflict Resolution", "Presentation"],
      user: {
        id: "user-007",
        name: "SkillBoost Academy",
        email: "hello@skillboost.io",
        phone: "1231231234",
        image:
          "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg",
      },
    },
    introVideoUrl:
      "https://videos.pexels.com/video-files/1181406/1181406-hd.mp4",
    chapters: [
      {
        id: "ch1",
        title: "Communication Fundamentals",
        description: "Verbal, non-verbal, and written forms",
      },
      {
        id: "ch2",
        title: "Professional Communication",
        description: "Meetings, reports, and conflict management",
      },
    ],
    time: "2 months",
    createdAt: "2025-06-10",
    updatedAt: "2025-07-10",
  },
  {
    id: "course-008",
    infor: {
      id: "prod-008",
      title: "UI/UX Design Essentials",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      price: 139.0,
      description:
        "Learn the principles of user interface and experience design to create beautiful, user-centered apps.",
      sellNumber: 950,
      discount: 0.2,
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
          id: 5,
          title: "Design",
          description:
            "The discipline of visual, interaction, and product design",
        },
      ],
      language: [{ id: "en", title: "English" }],
      values: [
        "Figma and wireframing fundamentals.",
        "User research and prototyping.",
        "Design thinking and accessibility.",
      ],
      skills: ["Figma", "Wireframing", "Prototyping", "Design Thinking"],
      user: {
        id: "user-008",
        name: "Creative UX Studio",
        email: "design@uxstudio.io",
        phone: "9999999999",
        image:
          "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      },
    },
    introVideoUrl:
      "https://videos.pexels.com/video-files/3184465/3184465-hd.mp4",
    chapters: [
      {
        id: "ch1",
        title: "Intro to UI/UX",
        description: "What makes a great product experience?",
      },
      {
        id: "ch2",
        title: "Wireframing with Figma",
        description: "Hands-on tutorial with tools",
      },
    ],
    time: "3 months",
    createdAt: "2025-05-25",
    updatedAt: "2025-07-10",
  },
];

export const mockFinishedCourses: Course[] = [mockCourses[0]];
