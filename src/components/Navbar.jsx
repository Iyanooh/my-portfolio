import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Navbar() {
  // Apply coffee-colored background to the whole page
  useEffect(() => {
    document.body.style.background = "#c19a6b"; // warm coffee color
    document.body.style.margin = 0; // remove default body margin
    document.body.style.fontFamily = "Arial, sans-serif";
  }, []);

  return (
    <nav
      style={{
        padding: "1rem",
        background: "#6f4e37",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center", // center everything
      }}
    >
      {/* Center links */}
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "2rem",
          margin: 0,
          padding: 0,
        }}
      >
        {["Home", "About", "Projects", "Contact"].map((text, i) => (
          <li key={i}>
            <Link
              to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
              style={{
                color: "inherit",
                textDecoration: "none",
                padding: "0.5rem 1rem",
                borderRadius: "8px",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.background = "#6f4e37")} // coffee brown
              onMouseLeave={(e) => (e.target.style.background = "transparent")}
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
