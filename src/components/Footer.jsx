import { useState } from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // X (Twitter new logo)
import { SiGmail } from "react-icons/si"; // Gmail

export default function Footer() {
  // Keep track of hover state for each icon
  const [hovered, setHovered] = useState(null);

  // Default styles
  const iconStyle = {
    margin: "0 10px",
    fontSize: "1.8rem",
    color: "#fff",
    transition: "color 0.3s ease",
  };

  // Brand hover colors
  const hoverColors = {
    facebook: "#1877f2",
    twitter: "#000000",
    linkedin: "#0a66c2",
    github: "#333",
    gmail: "#d14836",
    instagram: "linear-gradient(45deg, #f9ce34, #ee2a7b, #6228d7)",
    tiktok: "linear-gradient(45deg, #25F4EE, #FE2C55)",
  };

  // Function to handle hover color (normal vs gradient)
  const getHoverStyle = (platform) => {
    if (hovered === platform) {
      if (platform === "instagram" || platform === "tiktok") {
        return {
          ...iconStyle,
          background: hoverColors[platform],
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        };
      }
      return { ...iconStyle, color: hoverColors[platform] };
    }
    return iconStyle;
  };

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
          style={getHoverStyle("facebook")}
          onMouseEnter={() => setHovered("facebook")}
          onMouseLeave={() => setHovered(null)}
        >
          <FaFacebook />
        </a>

        <a
          href="https://x.com/@SirIan280396"
          target="_blank"
          rel="noreferrer"
          style={getHoverStyle("twitter")}
          onMouseEnter={() => setHovered("twitter")}
          onMouseLeave={() => setHovered(null)}
        >
          <FaXTwitter />
        </a>

        <a
          href="https://linkedin.com/in/ian-g-482a39253"
          target="_blank"
          rel="noreferrer"
          style={getHoverStyle("linkedin")}
          onMouseEnter={() => setHovered("linkedin")}
          onMouseLeave={() => setHovered(null)}
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/Iyanooh"
          target="_blank"
          rel="noreferrer"
          style={getHoverStyle("github")}
          onMouseEnter={() => setHovered("github")}
          onMouseLeave={() => setHovered(null)}
        >
          <FaGithub />
        </a>

        <a
          href="mailto:sirian96262@gmail.com"
          style={getHoverStyle("gmail")}
          onMouseEnter={() => setHovered("gmail")}
          onMouseLeave={() => setHovered(null)}
        >
          <SiGmail />
        </a>

        <a
          href="https://instagram.com/codeg.labs"
          target="_blank"
          rel="noreferrer"
          style={getHoverStyle("instagram")}
          onMouseEnter={() => setHovered("instagram")}
          onMouseLeave={() => setHovered(null)}
        >
          <FaInstagram />
        </a>

        <a
          href="https://tiktok.com/@codeglabs"
          target="_blank"
          rel="noreferrer"
          style={getHoverStyle("tiktok")}
          onMouseEnter={() => setHovered("tiktok")}
          onMouseLeave={() => setHovered(null)}
        >
          <FaTiktok />
        </a>
      </div>
      <p style={{ margin: 0 }}>
        © {new Date().getFullYear()} MyPortfolio. All Rights Reserved.
      </p>
    </footer>
  );
}
