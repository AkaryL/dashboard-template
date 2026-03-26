import StatCard from "./StatCard";

export default function MetricsBar({ items = [] }) {
  if (items.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {items.map((item, i) => (
        <StatCard
          key={i}
          label={item.label}
          value={item.value}
          change={item.change}
          trend={item.trend}
        />
      ))}
    </div>
  );
}
