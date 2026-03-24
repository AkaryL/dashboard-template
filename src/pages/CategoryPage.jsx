import ArticleCard from "../components/ArticleCard";

function CategoryPage({ category, articles }) {
  const categoryTitle = `${category.toUpperCase()} NEWS`;

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-10">
      {/* Section title with bottom border - matching screenshot style */}
      <div className="border-b border-gray-border pb-3 mb-10">
        <h1 className="font-serif text-2xl md:text-3xl font-bold uppercase text-dark tracking-wide">
          {categoryTitle}
        </h1>
      </div>

      {articles.length === 0 && (
        <p className="text-gray-500 text-lg">
          No articles available in this category yet.
        </p>
      )}

      {/* First row - 3 columns */}
      {articles.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {articles.slice(0, 3).map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}

      {/* Second row - 2 columns */}
      {articles.length > 3 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {articles.slice(3, 5).map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}

      {/* Remaining articles - 3 columns */}
      {articles.length > 5 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.slice(5).map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryPage;
