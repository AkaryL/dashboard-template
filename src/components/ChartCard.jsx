export default function ChartCard({ title, subtitle, children, className = "" }) {
  return (
    <div className={`bg-white border border-gray-border rounded-sm overflow-hidden hover:shadow-md transition-shadow ${className}`}>
      {(title || subtitle) && (
        <div className="px-5 pt-5 pb-2">
          {title && (
            <h3 className="text-sm font-serif font-bold text-dark">{title}</h3>
          )}
          {subtitle && (
            <p className="text-[11px] text-gray-medium mt-0.5">{subtitle}</p>
          )}
        </div>
      )}
      <div className="px-5 pb-5">
        {children}
      </div>
    </div>
  );
}
