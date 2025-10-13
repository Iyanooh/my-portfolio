export default function Projects() {
  // Example list of projects (we can replace with real ones later)
  const projects = [
    {
      title: "Munjeme Academy Management System",
      description:
        "It's an Academy Management Information System that Manages Young players data",
      image: "/kids.jpg",
      link: "#",
    },
    {
      title: "Pharmacy Management Information System",
      description:
        "It's a Management Information System that manages all sales records and manages core functions of a pharmacy",
      image: "/pharmacy.jpg",
      link: "#",
    },
    {
      title: "Hospital Management Information System",
      description:
        "A Hospital Grade Information System that Manages Data In Hospitals,Dispensary and Pharmacy Section",
      image: "/hospital.jpg",
      link: "#",
    },
  ];

  return (
    <section style={{ padding: "2rem" }}>
      <h2 style={{ textAlign: "center" }}>My Projects</h2>
      <p style={{ textAlign: "center" }}>Here are some of the projects I’ve worked on:</p>

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
