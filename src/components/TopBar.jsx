export default function TopBar() {
  const now = new Date();
  const dateStrLong = now.toLocaleDateString("es-MX", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dateStrShort = now.toLocaleDateString("es-MX", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="flex items-center justify-between px-4 sm:px-6 py-1.5 sm:py-2 border-b border-gray-border bg-white">
      <div className="flex items-center gap-2 text-gray-medium text-[10px] sm:text-xs">
        <svg
          className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0"
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
        <span className="capitalize hidden sm:inline">{dateStrLong}</span>
        <span className="capitalize sm:hidden">{dateStrShort}</span>
      </div>
      <div className="flex items-center gap-2 sm:gap-3 text-gray-medium text-[10px] sm:text-xs">
        <span className="text-green-600 font-medium">● Activo</span>
        <span className="hidden sm:inline">Confidencial</span>
      </div>
    </div>
  );
}
