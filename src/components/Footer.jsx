import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-10 sm:mt-16">
      <div className="border-t border-gray-border" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {/* Logo */}
        <div className="mb-4 sm:mb-8">
          <Link to="/" className="no-underline">
            <span className="font-serif text-xl sm:text-2xl">
              <span className="italic font-normal">Pulso</span>{" "}
              <span className="font-bold uppercase tracking-wider">Ciudadano</span>
              <span className="text-primary">*</span>
            </span>
          </Link>
        </div>

        {/* Bottom row */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <p className="text-[10px] sm:text-xs text-gray-medium font-sans">
            Copyright &copy; 2026 &middot; Pulso Ciudadano &middot; Gobierno de Jalisco &middot; Powered by Mageova
          </p>
        </div>
      </div>
    </footer>
  );
}
