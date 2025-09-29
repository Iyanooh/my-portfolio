export default function Contact() {
  return (
    <section style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Contact Me</h2>
      <p>
        I’d love to hear from you! Whether you have a question, a project idea,
        or just want to connect, feel free to reach out.
      </p>

      {/* Contact Info */}
      <div style={{ margin: "1.5rem 0" }}>
        <p>
          📧 Email:{" "}
          <a href="mailto:yourname@example.com">yourname@example.com</a>
        </p>
        <p>📞 Phone: +254 700 000 000</p>
      </div>

      {/* Social Media Links */}
      <div style={{ margin: "1.5rem 0" }}>
        <h3>Find me on</h3>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "1rem",
            padding: 0,
          }}
        >
          <li>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#222", textDecoration: "none" }}
            >
              🐙 GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0077b5", textDecoration: "none" }}
            >
              💼 LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1da1f2", textDecoration: "none" }}
            >
              🐦 Twitter
            </a>
          </li>
        </ul>
      </div>

      {/* Simple Contact Form */}
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          required
          style={{ padding: "0.75rem", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          style={{ padding: "0.75rem", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          required
          style={{ padding: "0.75rem", borderRadius: "5px", border: "1px solid #ccc" }}
        ></textarea>
        <button
          type="submit"
          style={{
            padding: "0.75rem",
            border: "none",
            borderRadius: "5px",
            background: "#222",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
