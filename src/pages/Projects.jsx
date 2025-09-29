export default function Projects() {
  // Example list of projects (we can replace with real ones later)
  const projects = [
    {
      title: "Bursary Management System",
      description:
        "An online system built with PHP, MySQL, and JavaScript for managing student bursary applications.",
      image: "https://via.placeholder.com/300x200",
      link: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio built with React, Docker, and deployed for global access.",
      image: "https://via.placeholder.com/300x200",
      link: "#",
    },
    {
      title: "Shop Management System",
      description:
        "A shop system handling sales, stock, customers, invoices, and reports using PHP and MySQL.",
      image: "https://via.placeholder.com/300x200",
      link: "#",
    },
  ];

  return (
    <section style={{ padding: "2rem" }}>
      <h2>My Projects</h2>
      <p>Here are some of the projects I’ve worked on:</p>

      {/* Project Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.5rem",
          marginTop: "1.5rem",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              overflow: "hidden",
              background: "#fff",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />

            {/* Project Content */}
            <div style={{ padding: "1rem" }}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                style={{
                  display: "inline-block",
                  marginTop: "0.5rem",
                  color: "#fff",
                  background: "#222",
                  padding: "0.5rem 1rem",
                  borderRadius: "5px",
                  textDecoration: "none",
                }}
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
