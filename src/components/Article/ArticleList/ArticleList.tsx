import ArticleCard from "../ArticleCard/ArticleCard";
import { Article } from "../Article";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import "./ArticleList.module.scss";

export default function ArticleList({
  articles,
}: {
  articles: Array<Article>;
}) {
  return (
    <MDBContainer className="m-3">
      <MDBRow className="bg-light m-3">
        {articles.map((article) => {
          return <ArticleCard key={article.id} article={article} />;
        })}
      </MDBRow>
    </MDBContainer>
  );
}
