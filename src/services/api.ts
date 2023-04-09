import axios from "axios";

export const AxiosAPI = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character",
});
