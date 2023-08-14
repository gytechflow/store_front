import { Article } from "../Article";
import axios, { AxiosResponse } from "axios";

export async function getArticle(articleId: number) {
  return axios.get<Article>(`http://localhost:8080/api/articles/${articleId}`);
}
