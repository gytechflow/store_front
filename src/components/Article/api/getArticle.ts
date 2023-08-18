import { Article, ArticleDto } from "../Article";
import axios, { AxiosResponse } from "axios";

export async function getArticle(articleId: number) {
  return axios.get<ArticleDto>(
    `${Config.apiBaseUrl}/api/articles/${articleId}`,
  );
}
