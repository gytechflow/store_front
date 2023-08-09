
import './App.scss';
import ArticleCard from './components/Article/ArticleCard/ArticleCard';
import articles from './models/articles.json';

function App() {
  return (
    <div className="App">
      <ArticleCard article={articles[0]} />
      <ArticleCard article={articles[1]} />
      <ArticleCard article={articles[2]} />
      <ArticleCard article={articles[3]} />
      <ArticleCard article={articles[4]} />
    </div>
  );
}

export default App;
