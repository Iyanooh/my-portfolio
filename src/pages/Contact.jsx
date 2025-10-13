import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log("Input changed:", e.target.name, e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    console.log("Submitting form with data:", formData);

    try {
      const API_URL = import.meta.env.VITE_API_URL;
      console.log("Using API URL:", API_URL);

      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log("Fetch response object:", res);

      // Check if response is okay
      if (!res.ok) {
        console.error("Response not OK:", res.status, res.statusText);
        setStatus(`❌ HTTP Error: ${res.status}`);
        return;
      }

      const data = await res.json();
      console.log("Response data:", data);

      if (data.success) {
        setStatus("✅ Message sent!");
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send: " + data.error);
        alert("Failed to send: " + data.error);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setStatus("❌ Error: " + err.message);
      alert("Fetch error: " + err.message);
    }
  };

  return (
    <section style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center" }}>Contact Me</h2>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>

      {status && <p>{status}</p>}
    </section>
  );
}
