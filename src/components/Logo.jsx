import { Link } from "react-router-dom";

export default function Logo({ size = "large" }) {
  const textSize = size === "large" ? "text-2xl sm:text-3xl md:text-5xl" : "text-lg sm:text-2xl";

  return (
    <div className="flex justify-center py-2 sm:py-3 md:py-4 px-4">
      <Link to="/" className="no-underline">
        <h1 className={`${textSize} font-serif leading-tight text-center`}>
          <span className="italic font-normal">Pulso</span>{" "}
          <span className="font-bold uppercase tracking-wider">Ciudadano</span>
          <span className="text-primary">*</span>
        </h1>
      </Link>
    </div>
  );
}
