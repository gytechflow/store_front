import { Spinner } from "react-bootstrap";
import ArticleCard from "../ArticleCard/ArticleCard";
import useArticleList from "../api/ArticleList";
import { ErrorComponent } from "../../Error/Error";

export default function ArticleList() {
  const { isLoading, articles, error } = useArticleList();

  return (
    <div className="{styles.articleList}">
      <ErrorComponent error={error} />
      {isLoading ? (
        <Spinner />
      ) : (
        articles.map((article) => {
          return <ArticleCard key={article.id} article={article} />;
        })
      )}
      ;
    </div>
  );
}
