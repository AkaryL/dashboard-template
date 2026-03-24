import { Link } from "react-router-dom";

export default function ArticleCard({ article, variant = "default" }) {
  const { title, image, author, date, category, slug } = article;

  if (variant === "overlay") {
    return (
      <Link to={`/article/${slug}`} className="group block relative no-underline overflow-hidden">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            {category && (
              <span className="inline-block text-[10px] font-sans font-semibold uppercase tracking-wider text-white bg-primary px-2 py-0.5 mb-2">
                {category}
              </span>
            )}
            <h3 className="font-serif text-lg font-bold text-white leading-snug">
              {title}
            </h3>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "small") {
    return (
      <Link to={`/article/${slug}`} className="group block no-underline">
        <div className="overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full aspect-[16/10] object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="pt-3">
          <h3 className="font-serif text-sm font-bold text-dark leading-snug line-clamp-2">
            {title}
          </h3>
          <p className="text-[11px] text-gray-medium font-sans mt-1.5">
            {author}
            <span className="mx-1.5">&middot;&mdash;&middot;</span>
            {date}
          </p>
        </div>
      </Link>
    );
  }

  // default variant
  return (
    <Link to={`/article/${slug}`} className="group block no-underline">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full aspect-[16/10] object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="pt-3">
        <h3 className="font-serif text-base font-bold text-dark leading-snug line-clamp-3">
          {title}
        </h3>
        <p className="text-xs text-gray-medium font-sans mt-2">
          {author}
          <span className="mx-1.5">&middot;&mdash;&middot;</span>
          {date}
        </p>
      </div>
    </Link>
  );
}
