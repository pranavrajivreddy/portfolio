import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import profilePic from "../images/profile1.jpeg";

export default function Home() {
  const navigate = useNavigate();
  const [showContact, setShowContact] = useState(false);

  return (
    <div style={styles.container}>
      
      {/* LEFT */}
      <div style={styles.left}>
        <img src={profilePic} alt="profile" style={styles.image} />
      </div>

      {/* RIGHT */}
      <div style={styles.right}>
        <h1 style={styles.name}>Pranav Rajiv Reddy</h1>

        <h3 style={styles.heading}>A Bit About Me</h3>

        <p style={styles.text}>
          I am an AI student passionate about Machine Learning, Deep Learning,
          and NLP. I enjoy building real-world AI systems and exploring
          data-driven solutions.
        </p>

        {/* BUTTONS */}
        <div style={styles.buttonContainer}>
          
          <button
            style={{ ...styles.circleBtn, background: "#f4a300" }}
            onClick={() => navigate("/projects")}
          >
            Projects
          </button>

          <button
            style={{ ...styles.circleBtn, background: "#7cc7c9" }}
            onClick={() => navigate("/skills")}
          >
            Skills
          </button>

          <button
            style={{ ...styles.circleBtn, background: "#ccc" }}
            onClick={() => setShowContact(!showContact)}
          >
            Contact
          </button>
        </div>

        {/* CONTACT BOX */}
        {showContact && (
          <div style={styles.contactBox}>
            <p><strong>Personal:</strong> pranav01az@gmail.com</p>
            <p><strong>Professional:</strong> se23uari081@mahindrauniversity.edu.in</p>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "#f5f5f5",
    gap: "120px",   // 🔥 better spacing between image & text
    padding: "60px"
  },

  left: {
    flex: 1,
    display: "flex",
    justifyContent: "center"
  },

  right: {
    flex: 1.2,   // 🔥 gives text more importance
    maxWidth: "600px"
  },

  image: {
    width: "380px",   // 🔥 bigger image
    height: "380px",
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
  },

  name: {
    fontSize: "52px",   // 🔥 bigger name
    marginBottom: "15px",
    fontWeight: "700"
  },

  heading: {
    fontSize: "22px",
    marginBottom: "15px",
    fontWeight: "600"
  },

  text: {
    color: "#555",
    lineHeight: "1.8",
    marginBottom: "40px",
    fontSize: "17px"   // 🔥 bigger paragraph
  },

  buttonContainer: {
    display: "flex",
    gap: "20px"
  },

  circleBtn: {
    width: "110px",   // 🔥 bigger buttons
    height: "110px",
    borderRadius: "50%",
    border: "none",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },

  contactBox: {
    marginTop: "25px",
    padding: "18px",
    background: "white",
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
    textAlign: "left",
    fontSize: "15px"
  }
};