import { getArticle } from "./getArticle";
import { useEffect, useState } from "react";
import { Article, convertArticleDto } from "../Article";
import { AxiosError } from "axios";

export default function useArticle(articleId: number) {
  const [isLoading, setLoading] = useState(false);
  const [article, setArticle] = useState<Article>();
  const [error, setError] = useState<Error | AxiosError | undefined>();

  function fetch() {
    setLoading(true);
    return getArticle(articleId)
      .then((response) => {
        setArticle(convertArticleDto(response.data));
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

  return { article, isLoading, error };
}
