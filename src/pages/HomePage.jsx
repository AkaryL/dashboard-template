import { Link } from "react-router-dom";
import BreakingNewsBar from "../components/BreakingNewsBar";
import SectionTitle from "../components/SectionTitle";
import ArticleCard from "../components/ArticleCard";
import {
  breakingNews,
  heroArticle,
  latestNews,
  podcastItems,
  newsData,
} from "../data/newsData";

const worldNews = newsData["World News"] || [];
const technologyNews = newsData["Technology"] || [];
const podcasts = podcastItems;

function HomePage() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 pb-16">
      {/* A) Breaking News Bar */}
      <section className="py-6">
        <BreakingNewsBar items={breakingNews} />
      </section>

      {/* B) Hero Article Section */}
      <section className="mb-14">
        <div className="relative w-full overflow-hidden">
          <Link to={`/article/${heroArticle.slug}`}>
            <img
              src={heroArticle.image}
              alt={heroArticle.title}
              className="w-full h-[480px] object-cover"
            />
          </Link>
          <div className="absolute top-4 left-4 flex items-center gap-3">
            <button className="w-9 h-9 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </button>
          </div>
          <div className="absolute top-4 right-4">
            <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1.5 rounded-sm uppercase tracking-wide">
              Gabriel
            </span>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <span className="text-[11px] font-semibold uppercase tracking-wider border border-gray-300 px-3 py-1 text-gray-600">
            Culture
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-wider border border-gray-300 px-3 py-1 text-gray-600">
            Guy Hawkins
          </span>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm text-gray-500">Sep 9, 2024</span>
          <Link
            to={`/article/${heroArticle.slug}`}
            className="text-sm font-medium text-gray-700 hover:text-black transition no-underline"
          >
            Read Article
          </Link>
        </div>

        <h1 className="mt-3 font-serif text-3xl md:text-4xl font-bold leading-tight text-gray-900">
          <Link to={`/article/${heroArticle.slug}`} className="hover:underline no-underline text-gray-900">
            {heroArticle.title}
          </Link>
        </h1>
      </section>

      {/* C) Latest News Section */}
      <section className="mb-14">
        <SectionTitle title="LATEST NEWS" link="/world-news" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Featured article - spans 2 columns */}
          {latestNews[0] && (
            <div className="lg:col-span-2">
              <Link
                to={`/article/${latestNews[0].slug}`}
                className="group flex flex-col md:flex-row gap-5 no-underline"
              >
                <div className="md:w-1/2 overflow-hidden">
                  <img
                    src={latestNews[0].image}
                    alt={latestNews[0].title}
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="md:w-1/2 flex flex-col justify-center">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 mb-2">
                    {latestNews[0].category}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-gray-900 group-hover:underline leading-snug">
                    {latestNews[0].title}
                  </h3>
                  <p className="text-xs text-gray-medium mt-2">
                    {latestNews[0].author}
                    <span className="mx-1.5">&middot;&mdash;&middot;</span>
                    {latestNews[0].date}
                  </p>
                </div>
              </Link>
            </div>
          )}

          {/* Right column - stacked small articles */}
          <div className="flex flex-col gap-5">
            {latestNews.slice(1, 4).map((article) => (
              <Link
                key={article.slug}
                to={`/article/${article.slug}`}
                className="group flex gap-4 no-underline"
              >
                <div className="w-24 h-20 flex-shrink-0 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-serif text-sm font-bold text-gray-900 group-hover:underline leading-snug line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-[11px] text-gray-medium mt-1">
                    {article.author}
                    <span className="mx-1">&middot;&mdash;&middot;</span>
                    {article.date}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Second row of latest news - 3 columns */}
        {latestNews.length > 3 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {latestNews.slice(3, 6).map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        )}
      </section>

      {/* D) World News Section */}
      <section className="mb-14">
        <SectionTitle title="WORLD NEWS" link="/world-news" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Featured world article with overlay */}
          {worldNews[0] && (
            <div className="lg:col-span-2">
              <Link
                to={`/article/${worldNews[0].slug}`}
                className="group relative block overflow-hidden no-underline"
              >
                <img
                  src={worldNews[0].image}
                  alt={worldNews[0].title}
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-white bg-white/20 backdrop-blur-sm px-2 py-0.5 mb-3">
                    {worldNews[0].category}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white leading-snug">
                    {worldNews[0].title}
                  </h3>
                  <p className="text-sm text-gray-300 mt-2">
                    By {worldNews[0].author}
                    <span className="mx-1.5">&middot;</span>
                    {worldNews[0].date}
                  </p>
                </div>
              </Link>
            </div>
          )}

          {/* Right stacked articles */}
          <div className="flex flex-col gap-6">
            {worldNews.slice(1, 3).map((article) => (
              <Link
                key={article.slug}
                to={`/article/${article.slug}`}
                className="group no-underline"
              >
                <div className="overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-serif text-base font-bold text-gray-900 mt-3 group-hover:underline leading-snug line-clamp-2">
                  {article.title}
                </h4>
                <p className="text-xs text-gray-medium mt-1">
                  Examining the challenges and responses of nations
                </p>
                <p className="text-[11px] text-gray-medium mt-1">
                  {article.author}
                  <span className="mx-1">&middot;&mdash;&middot;</span>
                  {article.date}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* E) Technology News Section */}
      <section className="mb-14">
        <SectionTitle title="TECHNOLOGY NEWS" link="/technology" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {technologyNews.slice(0, 4).map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      {/* F) Podcasts Section */}
      <section className="mb-14">
        <SectionTitle title="PODCASTS" link="/podcast" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {podcasts.slice(0, 6).map((podcast, i) => (
            <Link
              key={podcast.slug || i}
              to={podcast.slug ? `/article/${podcast.slug}` : "#"}
              className="group no-underline"
            >
              <div className="overflow-hidden">
                <img
                  src={podcast.image}
                  alt={podcast.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="text-sm font-semibold text-gray-900 mt-3 group-hover:underline leading-snug line-clamp-2">
                {podcast.title}
              </h4>
              <p className="text-[11px] text-gray-medium mt-1">{podcast.date || "Sep 9, 2024"}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
