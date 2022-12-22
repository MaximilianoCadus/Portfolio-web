import Project from "./Project";
import "../../css/projects/projects.css";
import portfolioImg from "../../assets/images/portfolio-web.png";
import blogImg from "../../assets/images/blog.png";
import gamefinderImg from "../../assets/images/gamefinder.png";

function Projects() {
  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        <Project
          values={{
            name: "GameFinder",
            bg: gamefinderImg,
            href: "https://github.com/MaximilianoCadus/GameFinder",
          }}
        />
        <Project
          values={{
            name: "Blog",
            bg: blogImg,
            href: "https://github.com/MaximilianoCadus/Blog",
          }}
        />
        <Project
          values={{
            name: "Portfolio",
            bg: portfolioImg,
            href: "https://github.com/MaximilianoCadus/maximilianocadus.github.io",
          }}
        />
      </div>
    </div>
  );
}

export default Projects;
