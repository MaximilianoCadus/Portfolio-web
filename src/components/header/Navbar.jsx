import { useContext } from "react";
import { HeaderContext } from "../../contexts/header/HeaderContext";

function Navbar() {
  const { clicked, handleClick } = useContext(HeaderContext);

  return (
    <>
      <nav>
        <hr />
        <div className="links">
          <a onClick={handleClick} href="#">
            About Me
          </a>
          <a onClick={handleClick} href="#">
            Projects
          </a>
          <a onClick={handleClick} href="#">
            Contact Me
          </a>
          <a onClick={handleClick} href="#">
            LinkedIn
          </a>
          <a onClick={handleClick} href="#">
            GitHub
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
