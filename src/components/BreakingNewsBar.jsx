import { Link } from "react-router-dom";

export default function BreakingNewsBar({ items = [] }) {
  if (items.length === 0) return null;

  return (
    <div className="bg-gray-light py-5 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.slice(0, 4).map((item, i) => (
          <Link
            key={item.slug || i}
            to={`/article/${item.slug}`}
            className="flex items-start gap-3 no-underline group"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-12 h-12 rounded-full object-cover shrink-0"
            />
            <div className="min-w-0">
              {item.category && (
                <span className="block text-[10px] font-sans font-semibold uppercase tracking-wider text-primary mb-1">
                  {item.category}
                </span>
              )}
              <h4 className="text-xs font-sans font-medium text-dark leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                {item.title}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
