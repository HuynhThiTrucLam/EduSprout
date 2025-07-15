export interface Major {
  id: number;
  title: string;
  description: string;
  code: string;
}

export const majors: Major[] = [
  {
    id: 0,
    title: "All",
    description: "All majors",
    code: "all",
  },
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
  {
    id: 3,
    title: "Business Administration",
    code: "BA",
    description:
      "Business Administration is the management of business operations and decision-making",
  },
  {
    id: 4,
    title: "Psychology",
    code: "PSY",
    description:
      "Psychology is the study of the human mind, behavior, and mental processes",
  },
  {
    id: 5,
    title: "Environmental Science",
    code: "ES",
    description:
      "Environmental Science is the study of the environment and solutions to environmental problems",
  },
  {
    id: 6,
    title: "Sociology",
    code: "SOC",
    description:
      "Sociology is the study of social life, groups, and societies.",
  },
  {
    id: 7,
    title: "Design",
    code: "DESIGN",
    description:
      "Design is the practice of creating and planning the appearance of something",
  },
  {
    id: 8,
    title: "Data Science",
    code: "DS",
    description:
      "Data Science is the study of the science of data and how to extract insights from data",
  },
];
