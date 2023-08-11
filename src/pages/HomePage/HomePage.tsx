import { Spinner } from "react-bootstrap";
import ArticleList from "../../components/Article/ArticleList/ArticleList";
import { ErrorComponent } from "../../components/Error/Error";
import useArticleList from "../../components/Article/api/ArticleList";
import "./HomePage.module.scss";

function HomePage() {
  const { isLoading, articles, error } = useArticleList();

  return (
    <div className="d-flex justify-content-center">
      <ErrorComponent error={error} />
      {isLoading ? <Spinner /> : <ArticleList articles={articles} />}
    </div>
  );
}

export default HomePage;
