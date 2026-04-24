import React from "react";

const projects = [
  {
    title: "Dog Vocalization Classifier",
    desc: "Classifies dog sounds using ML models",
    link: "https://github.com/pranavrajivreddy/dog-project"
  },
  {
    title: "NASA CMAPS Prediction",
    desc: "Predicts Remaining Useful Life using ML",
    link: "https://github.com/pranavrajivreddy/nasa-project"
  },
  {
    title: "Banquet Hall Booking Sysytem",
    desc: "A complete system to manage banquet hall bookings",
    link: "https://github.com/pranavrajivreddy/HotelSindhuraBanquetHallBooking"
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

            <button
              style={styles.button}
              onClick={() => window.open(p.link, "_blank")}
            >
              View Project
            </button>

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
    gap: "20px",
    justifyContent: "center"
  },
  card: {
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    width: "250px",
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