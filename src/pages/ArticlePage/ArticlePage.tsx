import { useParams } from "react-router-dom";

import "./ArticlePage.module.scss";
import useArticle from "../../components/Article/api/ArticleDetail";
import { ErrorComponent } from "../../components/Error/Error";
import ArticleDetail from "../../components/Article/ArticleDetail/ArticleDetail";
import { Article } from "../../components/Article/Article";
import { Spinner } from "react-bootstrap";

export default function ArticlePage() {
  const { articleId } = useParams();
  const { article, isLoading, error } = useArticle(
    parseInt(articleId as string),
  );

  return (
    <>
      {<ErrorComponent error={error} />}
      {!error &&
        (isLoading ? (
          <Spinner />
        ) : (
          <ArticleDetail article={article as Article} />
        ))}
    </>
  );
}
