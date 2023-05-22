import { useContext } from "react";
import { HeaderContext } from "../../contexts/header/HeaderContext";
import { Link } from "react-scroll";

function Navbar() {
  const { handleClick } = useContext(HeaderContext);

  return (
    <>
      <nav>
        <hr />
        <div className="links">
          <Link
            className="link"
            onClick={handleClick}
            to="presentation"
            smooth={true}
            offset={-100}
            duration={500}
          >
            Presentation
          </Link>
          <Link
            className="link"
            onClick={handleClick}
            to="about"
            smooth={true}
            offset={-50}
            duration={500}
          >
            About Me
          </Link>
          <Link
            className="link"
            onClick={handleClick}
            to="projects"
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
          <Link
            className="link"
            onClick={handleClick}
            to="contact"
            smooth={true}
            offset={-100}
            duration={500}
          >
            Contact Me
          </Link>
          <a
            className="link"
            onClick={handleClick}
            href="https://www.linkedin.com/in/maximilianocadus/"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            className="link"
            onClick={handleClick}
            href="https://github.com/MaximilianoCadus"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
