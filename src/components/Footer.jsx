import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#6f4e37", // coffee brown
        color: "#fff",
        padding: "1.5rem",
        marginTop: "2rem",
        textAlign: "center",
      }}
    >
      <div style={{ marginBottom: "1rem" }}>
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noreferrer"
          style={{ margin: "0 10px", color: "#fff", fontSize: "1.5rem" }}
        >
          <FaFacebook />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer"
          style={{ margin: "0 10px", color: "#fff", fontSize: "1.5rem" }}
        >
          <FaTwitter />
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noreferrer"
          style={{ margin: "0 10px", color: "#fff", fontSize: "1.5rem" }}
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          style={{ margin: "0 10px", color: "#fff", fontSize: "1.5rem" }}
        >
          <FaGithub />
        </a>
      </div>
      <p style={{ margin: 0 }}>© {new Date().getFullYear()} MyPortfolio. All Rights Reserved.</p>
    </footer>
  );
}
