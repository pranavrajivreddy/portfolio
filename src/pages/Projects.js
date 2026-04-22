import React from "react";

const projects = [
  {
    title: "Dog Vocalization Classifier",
    desc: "Classifies dog sounds using ML models",
  },
  {
    title: "NASA CMAPS Prediction",
    desc: "Predicts Remaining Useful Life using ML",
  },
  {
    title: "Diabetes Detection via Voice",
    desc: "Detects diabetes using voice biomarkers",
  }
];

export default function Projects() {
  return (
    <div style={styles.container}>
      <h1>Projects</h1>
      <div style={styles.grid}>
        {projects.map((p, index) => (
          <div key={index} style={styles.card}>
            <h2>{p.title}</h2>
            <p>{p.desc}</p>
            <button style={styles.button}>GitHub</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px"
  },
  grid: {
    display: "flex",
    gap: "20px",
    justifyContent: "center"
  },
  card: {
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    width: "250px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  },
  button: {
    marginTop: "10px",
    padding: "10px",
    background: "black",
    color: "white",
    border: "none",
    cursor: "pointer"
  }
};