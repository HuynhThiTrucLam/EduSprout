import axios from "axios";

export const getLanguagesService = async () => {
  const response = await axios.get(
    "https://api.languagetoolplus.com/v2/languages"
  );
  const languages = response.data.map((language: any) => ({
    id: language.code,
    title: language.name,
  }));
  return languages;
};
