import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
const articles = blogData;

  return (
    <div className="App">
      <Header name={articles.name} />
      <About image={articles.image} about={articles.about} />
      <ArticleList posts={articles.posts}/>
    </div>
  );
}

export default App;
