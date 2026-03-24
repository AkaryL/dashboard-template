import ArticleCard from "./ArticleCard";

export default function NewsGrid({ articles = [], columns = 3 }) {
  const colsClass =
    columns === 4
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      : columns === 3
        ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        : "grid-cols-1 sm:grid-cols-2";

  // Split articles into first row (columns count) and second row (2 cols)
  const firstRow = articles.slice(0, columns);
  const secondRow = articles.slice(columns, columns + 2);

  return (
    <div className="space-y-6">
      {firstRow.length > 0 && (
        <div className={`grid ${colsClass} gap-6`}>
          {firstRow.map((article, i) => (
            <ArticleCard key={article.slug || i} article={article} variant="default" />
          ))}
        </div>
      )}
      {secondRow.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {secondRow.map((article, i) => (
            <ArticleCard key={article.slug || i} article={article} variant="default" />
          ))}
        </div>
      )}
    </div>
  );
}
