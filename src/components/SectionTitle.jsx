import { Link } from "react-router-dom";

export default function SectionTitle({ title, link }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-border pb-3 mb-6">
      <h2 className="font-serif text-2xl font-bold uppercase tracking-wide text-dark">
        {title}
      </h2>
      {link && (
        <Link
          to={link}
          className="flex items-center gap-1 text-sm text-gray-medium font-sans no-underline hover:text-primary transition-colors"
        >
          View All
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </Link>
      )}
    </div>
  );
}
