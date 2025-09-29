import Hero from "../components/Hero";
import Skills from "../components/skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="page" style={{ textAlign: "center" }}>
        <h2>Welcome to My Portfolio 🚀</h2>
        <p>
          I’m a web developer focused on building full-stack applications with
          modern tools. Scroll down to see my projects and get in touch!
        </p>
      </div>
      <Skills />
    </div>
  );
}
