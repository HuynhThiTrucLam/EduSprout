import axios from "axios";

export const getFavoritesService = async (userId: string) => {
  const response = await axios.get("/api/favorites");
  return response.data;
};
