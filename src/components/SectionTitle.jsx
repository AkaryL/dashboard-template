import { Link } from "react-router-dom";

export default function SectionTitle({ title, link, subtitle }) {
  return (
    <div className="flex items-start sm:items-center justify-between border-b border-gray-border pb-3 mb-4 sm:mb-6 gap-4">
      <div>
        <h2 className="font-serif text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-wide text-dark">
          {title}
        </h2>
        {subtitle && (
          <p className="text-[10px] sm:text-xs text-gray-medium mt-1">{subtitle}</p>
        )}
      </div>
      {link && (
        <Link
          to={link}
          className="flex items-center gap-1 text-xs sm:text-sm text-gray-medium font-sans no-underline hover:text-primary transition-colors shrink-0"
        >
          <span className="hidden sm:inline">Ver detalle</span>
          <span className="sm:hidden">Ver</span>
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
