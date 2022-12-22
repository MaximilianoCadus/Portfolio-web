import "../../css/projects/project.css";

function Project({ values }) {
  return (
    <div
      className="project"
      style={{ backgroundImage: `url(${values.bg})`, backgroundSize: "cover" }}
    >
      <a className="project-link" href={values.href} target="_blank">
        {values.name}
      </a>
    </div>
  );
}

export default Project;
