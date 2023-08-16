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
    <MDBContainer className="m-3 d-flex justify-content-center" lg="9">
      <MDBRow className="bg-light m-3 p-5 w-75">
        {articles.map((article) => {
          return <ArticleCard key={article.id} article={article} />;
        })}
      </MDBRow>
    </MDBContainer>
  );
}
