import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ categories }) {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const getCategoryPath = (cat) => {
    if (cat === "Resumen") return "/";
    return `/${cat.toLowerCase().replace(/\s+/g, "-")}`;
  };

  const isActive = (cat) => {
    if (cat === "Resumen") return location.pathname === "/";
    return location.pathname === getCategoryPath(cat);
  };

  const activeLabel = categories.find((c) => isActive(c)) || "Resumen";

  return (
    <nav className="border-t border-b border-gray-border relative">
      {/* Desktop nav */}
      <ul className="hidden md:flex items-center justify-center gap-8 py-3 px-6 list-none m-0">
        {categories.map((cat) => (
          <li key={cat}>
            <Link
              to={getCategoryPath(cat)}
              className={`text-sm font-sans no-underline transition-colors duration-200 ${
                isActive(cat)
                  ? "text-primary font-medium"
                  : "text-dark hover:text-primary"
              }`}
            >
              {cat}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile nav trigger */}
      <div className="md:hidden flex items-center justify-between px-4 py-2.5">
        <span className="text-xs font-sans font-medium text-primary">{activeLabel}</span>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1.5 text-xs font-sans text-dark bg-transparent border border-gray-border rounded-sm px-3 py-1.5 cursor-pointer hover:border-primary transition-colors"
          aria-label="Menu de navegacion"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
          Menu
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-border shadow-lg z-50">
          <ul className="list-none m-0 p-0">
            {categories.map((cat) => (
              <li key={cat} className="border-b border-gray-border last:border-b-0">
                <Link
                  to={getCategoryPath(cat)}
                  onClick={() => setOpen(false)}
                  className={`block px-5 py-3 text-sm font-sans no-underline transition-colors duration-200 ${
                    isActive(cat)
                      ? "text-primary font-medium bg-red-50"
                      : "text-dark hover:text-primary hover:bg-gray-light"
                  }`}
                >
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
