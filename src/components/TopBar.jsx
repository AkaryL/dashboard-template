export default function TopBar() {
  return (
    <div className="flex items-center justify-between px-6 py-2 border-b border-gray-border bg-white">
      <div className="flex items-center gap-2 text-gray-medium text-xs">
        <svg
          className="w-3.5 h-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        <span>Tuesday, October 29, 2024</span>
      </div>
      <div className="flex items-center gap-3 text-gray-medium text-xs">
        <span className="flex items-center gap-1 cursor-pointer hover:text-dark">
          The Menu
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </span>
        <button className="hover:text-dark" aria-label="Search">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      </div>
    </div>
  );
}
