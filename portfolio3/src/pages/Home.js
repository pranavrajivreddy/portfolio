import "./Home.css";
import profile from "../assets/profile.jpeg";

function Home() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h4>AI / ML STUDENT</h4>
        <h1>
          Hello, my name <br /> is Sathwik Reddy
        </h1>

        <p>
          I am a B.Tech AI student at Mahindra University passionate about
          Machine Learning, Software Development, and building real-world projects.
        </p>
          <div className="research">
          <h3>Research Interests</h3>
          <p>Business Analytics, Data-Driven Decision Making, and General Business Strategy</p>
         </div>
         

         <div className="contact-info">
         <p><strong>Personal:</strong> kamidisathwikreddy@gmail.com</p>
         <p><strong>Professional:</strong> se23uari061@mahindrauniversity.edu.in</p>
         </div>

        <div className="buttons">
          <a href="/#/projects" className="btn primary">Projects</a>

          <a 
            href="https://www.linkedin.com/in/sathwik-reddy-095730405" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn secondary"
          >
            LinkedIn
          </a>
        </div>

      </div>

      <div className="hero-right">
        <img src={profile} alt="profile" />
      </div>
    </div>
  );
}

export default Home;