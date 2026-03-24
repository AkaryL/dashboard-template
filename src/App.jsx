import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ArticlePage from "./pages/ArticlePage";
import { newsData } from "./data/newsData";

function App() {
  const categories = [
    "World News",
    "Politics",
    "Business",
    "Technology",
    "Health",
    "Sports",
    "Culture",
    "Podcast",
  ];

  return (
    <Router>
      <Routes>
        <Route element={<Layout categories={categories} />}>
          <Route path="/" element={<HomePage />} />
          {categories.map((cat) => (
            <Route
              key={cat}
              path={`/${cat.toLowerCase().replace(/\s+/g, "-")}`}
              element={
                <CategoryPage
                  category={cat}
                  articles={newsData[cat] || []}
                />
              }
            />
          ))}
          <Route path="/article/:slug" element={<ArticlePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
