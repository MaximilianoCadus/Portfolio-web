import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
import "../../css/about me/about-me.css";

function AboutMe() {
  return (
    <div className="about-me" id="about">
      <h2>About Me</h2>
      <p>
        Hello! My name is Maxi and I love building websites. My interest in web
        development started back in 2019 when I decided to enter the IT sector.
        My main focus these days is implementing what I already know and
        continue learning about web development.
      </p>
      <p>Here are a few technologies I've been working with recently:</p>
      <ul>
        <li>
          <AiFillHtml5 /> HTML
        </li>
        <li>
          <DiCss3 />
          CSS
        </li>
        <li>
          <SiJavascript />
          JavaScript
        </li>
        <li>
          <DiReact /> React
        </li>
        <li>
          <AiFillGithub />
          Git
        </li>
      </ul>
    </div>
  );
}

export default AboutMe;
