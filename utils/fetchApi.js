import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";
const API_KEY = `${process.env.APP_API_KEY}`;
const API_BASE_URL = `${process.env.API_BASE_URL}`;

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": API_BASE_URL,
      "x-rapidapi-key": API_KEY,
    },
  });

  return data;
};
