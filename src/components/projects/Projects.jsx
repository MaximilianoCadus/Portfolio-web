import Project from "./Project";
import "../../css/projects/projects.css";

function Projects() {
  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}

export default Projects;
