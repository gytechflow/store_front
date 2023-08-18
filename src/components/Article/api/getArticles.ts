import { ArticleDto } from "../Article";
import axios from "axios";

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
