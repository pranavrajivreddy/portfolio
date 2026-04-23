import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Pranav</h2>

      <div>
        <NavLink to="/" style={styles.link}>Home</NavLink>
        <NavLink to="/projects" style={styles.link}>Projects</NavLink>
        <NavLink to="/skills" style={styles.link}>Skills</NavLink> {/* ✅ ADDED */}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    background: "#111",
    color: "white",
    alignItems: "center"
  },
  logo: {
    fontWeight: "bold"
  },
  link: {
    marginLeft: "20px",
    color: "white",
    textDecoration: "none",
    fontWeight: "500"
  }
};