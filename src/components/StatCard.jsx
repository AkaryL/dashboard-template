export default function StatCard({ label, value, change, trend }) {
  return (
    <div className="bg-gray-light border border-gray-border rounded-sm p-3 sm:p-5 hover:shadow-md transition-shadow">
      <span className="block text-[9px] sm:text-[10px] font-sans font-semibold uppercase tracking-wider text-gray-medium mb-1.5 sm:mb-2">
        {label}
      </span>
      <div className="flex items-end gap-2 sm:gap-3">
        <span className="text-xl sm:text-2xl font-bold text-dark font-serif">{value}</span>
        {change && (
          <span className={`text-[10px] sm:text-xs font-medium mb-0.5 sm:mb-1 ${
            trend === "up" ? "text-green-600" : "text-red-500"
          }`}>
            {trend === "up" ? "▲" : "▼"} {change}
          </span>
        )}
      </div>
    </div>
  );
}
