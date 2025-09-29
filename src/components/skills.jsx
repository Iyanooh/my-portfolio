// src/components/Skills.jsx
export default function Skills() {
  const skills = ["React.js", "Node.js", "Express.js", "MongoDB", "Docker"];

  return (
    <section
      style={{
        padding: "3rem 1rem",
        textAlign: "center",
        background: "#8FBC8F",
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
        My Skills 
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              padding: "1rem 2rem",
              background: "#222",
              color: "white",
              borderRadius: "8px",
              fontSize: "1.2rem",
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
