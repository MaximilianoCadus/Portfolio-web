import "../../css/presentation/Presentation.css";

function Presentation() {
  return (
    <div className="presentation" id="presentation">
      <h1 className="title">
        Maxi Cadús, <span>Frontend Developer</span>
      </h1>
      <p className="description">
        I'm a Web Developer specializing in building (and occasionally
        designing) websites.
      </p>
      <div className="cv">
        <a
          className="download"
          href="../../assets/documents/Curriculum Vitae - Maximiliano Cadús (English).pdf"
          download="Maximiliano Cadús"
        >
          Download CV
        </a>
      </div>
    </div>
  );
}

export default Presentation;
