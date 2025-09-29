// src/pages/About.jsx
export default function About() {
  return (
    <section
      className="about"
      style={{
        padding: "2rem",
        display: "flex",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      {/* Profile Picture */}
      <div>
        <img
          src="/profile.png"
          alt="Profile"
          style={{
            borderRadius: "50%",
            width: "200px",
            height: "200px",
            objectFit: "cover",
            border: "3px solid #222",
          }}
        />
      </div>

      {/* About Content */}
      <div style={{ maxWidth: "600px", alignitems: "center", background: "#f9f9f9"}}>
        <h2>About Me</h2>
        <p>
          Hi, I’m <strong>Ian</strong> 👋 — a web developer passionate about
          building modern and responsive applications. I enjoy learning and
          applying new technologies like <strong>MERN Stack</strong> (MongoDB,
          Express, React, Node.js) and working with <strong>Docker</strong> for
          containerization.
        </p>
        <p>
          My background also includes working with <strong>Artificial Intelligence</strong> which I use to solve real-world problems and
          create practical solutions.
        </p>

        <p>
          Beyond coding, I’m focused on <strong>clean design</strong> and
          <strong>user experience</strong>, ensuring that everything I build is
          simple, intuitive, and impactful.
        </p>

        <h3>Skills & Tools 🚀</h3>
        <ul style={{ lineHeight: "1.8" }}>
          <li>HTML, CSS, JavaScript (ES6+)</li>
          <li>React.js & React Router</li>
          <li>Node.js & Express</li>
          <li>MongoDB & MySQL</li>
          <li>Artificial Intelligence</li>
          <li>Docker & Git/GitHub</li>
        </ul>
      </div>
    </section>
  );
}
