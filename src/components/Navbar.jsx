import { Link, useLocation } from "react-router-dom";

export default function Navbar({ categories }) {
  const location = useLocation();

  const getCategoryPath = (cat) => `/${cat.toLowerCase().replace(/\s+/g, "-")}`;

  const isActive = (cat) => {
    const path = getCategoryPath(cat);
    return location.pathname === path;
  };

  return (
    <nav className="border-t border-b border-gray-border">
      <ul className="flex items-center justify-center gap-8 py-3 px-6 list-none m-0">
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
    </nav>
  );
}
