import axios from "axios";

interface LanguageResponse {
  code: string;
  name: string;
}

export const getLanguagesService = async () => {
  const response = await axios.get<LanguageResponse[]>(
    "https://api.languagetoolplus.com/v2/languages"
  );
  const languages = response.data.map((language: LanguageResponse) => ({
    id: language.code,
    title: language.name,
  }));
  return languages;
};
