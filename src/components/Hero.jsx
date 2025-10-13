import codingHero from "../assets/coding-Hero.jpg"; // Place image in src/assets/

export default function Hero() {
  return (
    <section
      style={{
        height: "50vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${codingHero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "2rem",
      }}
    >
      {/* Animated heading */}
      <h1
        style={{
          fontSize: "3rem",
          marginBottom: "1rem",
          animation: "fadeInOut 4s infinite",
        }}
      >
        Developer Ian Gachengeci
      </h1>

      {/* Animated sub-text */}
      <p
        style={{
          fontSize: "1.5rem",
          maxWidth: "600px",
          animation: "fadeInOut 6s infinite",
        }}
      >
        A passionate web developer building modern web apps with the MERN stack.
      </p>

      {/* Animation keyframes */}
      <style>
        {`
          @keyframes fadeInOut {
            0% { opacity: 0; }
            25% { opacity: 1; }
            75% { opacity: 0.5; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </section>
  );
}
