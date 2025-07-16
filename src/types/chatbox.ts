export interface Message {
  id: string;
  type: "user" | "bot";
  message: string;
}

export const initialMessages: Message[] = [
  {
    id: "1",
    type: "bot",
    message: "Xin chào! Tôi có thể giúp gì cho bạn?",
  },
];

export const mockNearlyTopics = [
  {
    id: 1,
    name: "UIUX",
  },
  {
    id: 2,
    name: "English",
  },
  {
    id: 3,
    name: "Math",
  },
  {
    id: 4,
    name: "Computer Science",
  },
];
