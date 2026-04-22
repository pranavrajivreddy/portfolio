import React from "react";

export default function Home() {
  return (
    <div style={styles.container}>
      <img
        src="https://via.placeholder.com/150"
        alt="profile"
        style={styles.image}
      />

      <h1>Pranav Rajiv Reddy</h1>
      <p>
        AI student passionate about Machine Learning, Deep Learning, and NLP.
        Experienced in building real-world AI systems.
      </p>

      <h2>Research Interests</h2>
      <ul>
        <li>Machine Learning</li>
        <li>Deep Learning</li>
        <li>NLP</li>
        <li>Audio Processing</li>
        <li>Computer Vision</li>
      </ul>

      <h2>Skills</h2>
      <p>
        Python, Java, C, MATLAB, MySQL | PyTorch, TensorFlow, Scikit-learn
      </p>

      <h2>Contact</h2>
      <p>Email: Pranav01az@gmail.com</p>
      <p>Phone: +91 70931 45215</p>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    textAlign: "center"
  },
  image: {
    borderRadius: "50%",
    width: "150px"
  }
};