import React from "react";

const skills = [
  { name: "Python", icon: "🐍" },
  { name: "Java", icon: "☕" },
  { name: "C", icon: "💻" },
  { name: "MATLAB", icon: "📊" },
  { name: "MySQL", icon: "🗄️" },
  { name: "PyTorch", icon: "🔥" },
  { name: "TensorFlow", icon: "🔶" },
  { name: "Scikit-learn", icon: "📈" },
  { name: "Git", icon: "🔧" },
  { name: "Machine Learning", icon: "🤖" },
  { name: "Deep Learning", icon: "🧠" },
  { name: "NLP", icon: "💬" },
  { name: "Computer Vision", icon: "👁️" }
];

export default function Skills() {
  return (
    <div style={styles.container}>
      <h1>Skills</h1>

      <div style={styles.grid}>
        {skills.map((skill, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.icon}>{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    textAlign: "center"
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px"
  },
  card: {
    width: "120px",
    height: "120px",
    borderRadius: "12px",
    background: "#f5f5f5",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    cursor: "pointer"
  },
  icon: {
    fontSize: "30px",
    marginBottom: "10px"
  }
};