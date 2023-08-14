import { Article } from "../Article";
import axios, { AxiosResponse } from "axios";

interface PageableResponse<T> {
  totalPages: number;
  totalElements: number;
  first: boolean;
  content: T[];
}

export async function getArticles() {
  axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
  return axios.get<PageableResponse<Article>>(
    `http://localhost:8080/api/articles`,
  );
}
