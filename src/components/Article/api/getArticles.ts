import { Article, ArticleDto } from "../Article";
import axios, { AxiosResponse } from "axios";

interface PageableResponse<T> {
  totalPages: number;
  totalElements: number;
  first: boolean;
  content: T[];
}

export async function getArticles() {
  return axios.get<PageableResponse<ArticleDto>>(
    `${Config.apiBaseUrl}/api/articles`,
  );
}
