import { Link } from "react-router-dom";

export default function Logo({ size = "large" }) {
  const textSize = size === "large" ? "text-5xl" : "text-2xl";

  return (
    <div className="flex justify-center py-4">
      <Link to="/" className="no-underline">
        <h1 className={`${textSize} font-serif leading-tight`}>
          <span className="italic font-normal">The</span>{" "}
          <span className="font-bold uppercase tracking-wider">NEWS</span>
          <span className="text-primary">*</span>
        </h1>
      </Link>
    </div>
  );
}
