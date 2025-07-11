export interface User {
  id: string;
  image: string;
  name: string;
  phone: string;
  email: string;
  password?: string; // for check login
}

export const mockUsers: User[] = [
  {
    id: "user-0001",
    image:
      "https://media.istockphoto.com/id/2219371361/vi/anh/%E1%BA%A3nh-anh-ch%C3%A0ng-h%E1%BA%A5p-d%E1%BA%ABn-m%E1%BA%B7c-%C3%A1o-chui-%C4%91%E1%BA%A7u-m%C3%A0u-tr%E1%BA%AFng-cho-th%E1%BA%A5y-hai-ng%C3%B3n-tay-c%C3%A1i-gi%C6%A1-l%C3%AAn-n%E1%BB%81n-m%C3%A0u-cam.jpg?s=2048x2048&w=is&k=20&c=FYsw4YWSII9FA13L5ajub3lWhAbNVpR5tH8OZB4e3Hw=",
    name: "John Doe",
    phone: "1234567890",
    email: "john.doe@example.com",
    password: "password",
  },
];
