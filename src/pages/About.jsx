// src/pages/About.jsx
export default function About() {
  return (
    <section
      className="about"
      style={{
        padding: "3rem",
        display: "flex",
        alignItems: "flex-start",
        gap: "2rem",
        flexWrap: "wrap",
        justifyContent: "center",
        background:"#c19a6b",
      }}
    >
      {/* Profile Picture */}
      <div
        className="profile-pic-container"
        style={{
          flex: "0 0 200px",
          minWidth: "200px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src="/profile.png"
          alt="Profile"
          className="profile-pic"
          style={{
            borderRadius: "50%",
            width: "200px",
            height: "200px",
            objectFit: "cover",
            border: "3px solid #555",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            transition: "transform 0.3s, box-shadow 0.3s",
            opacity: 0,
            transform: "translateX(-50px)",
            animation: "fadeSlideIn 0.8s forwards",
          }}
        />
      </div>

      {/* About Content */}
      <div
        className="about-content"
        style={{
          flex: "1",
          maxWidth: "650px",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          background: "linear-gradient(135deg,rgb(141, 238, 233), #6f4e37)", // subtle gradient
          borderRadius: "20px",
          padding: "2rem",
          boxShadow: "0 6px 20px rgba(236, 188, 56, 0.1)",
        }}
      >
        {/* About Me Section */}
        {/* About Me Section */}
<div
  className="card-section"
  style={{
    background: "#ffffff",
    borderRadius: "15px",
    padding: "2rem",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    transition: "transform 0.3s, box-shadow 0.3s",
    opacity: 0,
    transform: "translateY(30px)",
    animation: "fadeSlideUp 0.8s forwards",
    animationDelay: "0.3s",
    position: "relative",
  }}
>
  <div
    className="heading-box"
    style={{
      display: "inline-block",
      background: "linear-gradient(135deg, #6f4e37, #a9745b)",
      color: "#fff",
      borderRadius: "12px",
      padding: "0.5rem 1rem",
      fontWeight: "bold",
      position: "absolute",
      top: "-20px",
      left: "50%",
      transform: "translateX(-50%)",
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    }}
  >
    About Me
  </div>

  <div style={{ marginTop: "1.5rem" }}>
    <p>
      Hi, I’m a web developer passionate about
      building modern and responsive applications. I enjoy learning and
      applying new technologies like <strong>MERN Stack</strong> (MongoDB,
      Next.js, React, Node.js) and working with <strong>Docker</strong> for
      containerization.
    </p>
    <p>
      My background also includes working with <strong>Artificial Intelligence</strong> which I use to solve real-world problems and
      create practical solutions.
    </p>
    <p>
      Beyond coding, I’m focused on <strong>clean design</strong> and
      <strong> user experience</strong>, ensuring that everything I build is
      simple, intuitive, and impactful.
    </p>
  </div>
</div>


        {/* Skills & Tools Section */}
<div
  className="card-section"
  style={{
    background: "#ffffff",
    borderRadius: "15px",
    padding: "2rem",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    transition: "transform 0.3s, box-shadow 0.3s",
    opacity: 0,
    transform: "translateY(30px)",
    animation: "fadeSlideUp 0.8s forwards",
    animationDelay: "0.5s",
    position: "relative",
  }}
>
  <div
    className="heading-box"
    style={{
      display: "inline-block",
      background: "linear-gradient(135deg, #6f4e37, #a9745b)",
      color: "#fff",
      borderRadius: "12px",
      padding: "0.5rem 1rem",
      fontWeight: "bold",
      position: "absolute",
      top: "-20px",
      left: "50%",
      transform: "translateX(-50%)",
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    }}
  >
    Skills & Tools
  </div>

  <ul className="skills-list" style={{ marginTop: "1.5rem", lineHeight: "2", listStyle: "none", padding: 0 }}>
    <li>HTML, CSS, JavaScript (ES6+)</li>
    <li>React.js & React Router</li>
    <li>Node.js & Next.js</li>
    <li>MongoDB & MySQL</li>
    <li>Artificial Intelligence</li>
    <li>Docker & Git/GitHub</li>
  </ul>
</div>
</div>

      {/* Responsive + Hover + Animation Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .about {
            flex-direction: column;
            align-items: center;
          }

          .about div:first-child {
            margin-bottom: 1.5rem;
          }

          .about-content {
            max-width: 100%;
          }
        }

        /* Profile Picture Hover */
        .profile-pic:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(0,0,0,0.3);
        }

        /* Skills Hover */
        .skills-list li {
          padding: 0.3rem 0.5rem;
          border-radius: 8px;
          transition: background 0.3s, color 0.3s;
        }

        .skills-list li:hover {
          background: #8FBC8F;
          color: #fff;
        }

        /* Card Section Hover */
        .card-section:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }

        /* Animations */
        @keyframes fadeSlideIn {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeSlideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
