import "./Projects.css";

function Projects() {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>

      <div className="projects-grid">
        
        <div className="project-card">
          <h2>Attendance Analyzer</h2>
          <p>
            Smart system to track, analyze, and predict student attendance
            to avoid shortages and improve performance.
          </p>

          <div className="project-buttons">
            <a href="https://github.com/kvenkatasubbarao52/Student-attendance-analyzer" target="_blank">
              View Code
            </a>
          </div>
        </div>

        <div className="project-card">
          <h2>Fake Headline Rewriter</h2>
          <p>
            Detects fake or sensational headlines and rewrites them using
            NLP techniques with confidence scoring.
          </p>

          <div className="project-buttons">
            <a href="https://github.com/havishya911/NLP-2025" target="_blank">
              View Code
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;