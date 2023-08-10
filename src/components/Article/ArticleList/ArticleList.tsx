import ArticleCard from "../ArticleCard/ArticleCard";
import { Article } from "../Article";
import "./ArticleList.module.scss";

export default function ArticleList({
  articles,
}: {
  articles: Array<Article>;
}) {
  return (
    <div className="{styles.articleList}">
      {articles.map((article) => {
        return <ArticleCard key={article.id} article={article} />;
      })}
      ;
    </div>
  );
}
