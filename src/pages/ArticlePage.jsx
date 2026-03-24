import { useParams, Link } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import {
  heroArticle,
  getAllArticles,
  articleContent,
} from "../data/newsData";

function ArticlePage() {
  const { slug } = useParams();

  const allArticles = [heroArticle, ...getAllArticles()];
  const article = allArticles.find((a) => a.slug === slug) || heroArticle;

  // Get similar news
  const similarNews = allArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-10">
      {/* Author info */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-dark">
            {article.author || "Guy Hawkins"}
          </p>
          <p className="text-xs text-gray-medium">{article.date || "Sep 9, 2024"}</p>
        </div>
      </div>

      {/* Article Title */}
      <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-dark leading-tight mb-8">
        {article.title}
      </h1>

      {/* Hero Image */}
      <div className="w-full overflow-hidden mb-10">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-[400px] md:h-[500px] object-cover"
        />
      </div>

      {/* Article Body */}
      <article className="max-w-[800px] mx-auto mb-16">
        {article.content ? (
          <div
            className="text-gray-700 text-base leading-relaxed [&>p]:mb-5 [&>h2]:font-serif [&>h2]:text-xl [&>h2]:font-bold [&>h2]:text-dark [&>h2]:mb-3 [&>h2]:mt-8 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>li]:mb-2"
            dangerouslySetInnerHTML={{ __html: article.content || articleContent }}
          />
        ) : (
          <div
            className="text-gray-700 text-base leading-relaxed [&>p]:mb-5 [&>h2]:font-serif [&>h2]:text-xl [&>h2]:font-bold [&>h2]:text-dark [&>h2]:mb-3 [&>h2]:mt-8 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>li]:mb-2"
            dangerouslySetInnerHTML={{ __html: articleContent }}
          />
        )}
      </article>

      {/* Similar News Section */}
      <section className="border-t border-gray-border pt-10">
        <h2 className="font-serif text-2xl font-bold uppercase text-dark mb-6">
          Similar News
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {similarNews.map((similarArticle) => (
            <ArticleCard key={similarArticle.slug} article={similarArticle} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default ArticlePage;
