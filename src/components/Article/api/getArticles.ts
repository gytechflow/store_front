import { Article } from "../../../models/articles";
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
    `${Config.apiBaseUrl}/api/articles`,
  );
}
