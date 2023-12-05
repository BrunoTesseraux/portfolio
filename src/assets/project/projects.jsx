import ProjectTemplate from "./projecttemplate";
import "./project.css";
const Projects = () => {
  return (
    <section>
      <h2>PROJECTS</h2>
      <div>
        <ProjectTemplate title="Project 1" />
        <ProjectTemplate title="Project 2" />
        <ProjectTemplate title="Project 3" />
      </div>
    </section>
  );
};

export default Projects;
