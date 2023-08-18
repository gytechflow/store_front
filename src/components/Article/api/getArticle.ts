import { ArticleDto } from "../Article";
import axios from "axios";

export async function getArticle(articleId: number) {
  return axios.get<ArticleDto>(
    `${Config.apiBaseUrl}/api/articles/${articleId}`,
  );
}
