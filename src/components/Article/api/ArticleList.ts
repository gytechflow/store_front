import { getArticles } from "./getArticles";
import { useEffect, useState } from "react";
import { Article, convertArticleDto } from "../Article";
import { AxiosError } from "axios";

export default function useArticleList() {
  const [isLoading, setLoading] = useState(false);
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<Error | AxiosError | undefined>();

  function fetch() {
    setLoading(true);
    return getArticles()
      .then((response) => {
        setArticles(
          response.data.content.map((data) => convertArticleDto(data)),
        );
      })
      .catch((e: Error | AxiosError) => {
        // Nous sommes sûr ici que l'erreur sera logée
        console.error("Error while fetching articleList: ", e);
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    fetch();
  }, []);

  return { articles, isLoading, error };
}
