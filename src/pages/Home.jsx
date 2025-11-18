import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <div
        className="page"
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            padding: "2rem",
            borderRadius: "16px",
            background: "#fff",
            border: "2px solid #6f4e37",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.03)";
            e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.2)";
            e.currentTarget.style.background = "#a5d6a7"; // soft green
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
            e.currentTarget.style.background = "#6f4e37"; // back to white
          }}
        >
          {/* Heading */}
          <h2
            style={{
              display: "inline-block",
              padding: "0.5rem 2rem",
              borderRadius: "12px",
              background: "#f5f5f5",
              borderBottom: "3px solid #6f4e37",
              marginBottom: "1rem",
              transition: "color 0.3s ease, background 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.background = "#6f4e37";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "inherit";
              e.currentTarget.style.background = "#f5f5f5";
            }}
          >
            Welcome to My Portfolio
          </h2>

          {/* Paragraph (always black) */}
          <p
            style={{
              fontWeight: "bold",
              fontFamily: "sans-serif",
              lineHeight: "1.6",
              color: "#000", // stays black
            }}
          >
            “I’m passionate about transforming ideas into powerful digital
            solutions. From building sleek websites to developing robust
            management systems, I focus on crafting tools that don’t just work,
            but truly make an impact. Every project you’ll see here reflects my
            dedication to innovation, problem-solving, and creating experiences
            that inspire.”
          </p>
        </div>
      </div>
      </div>
  );
}
//deploy

