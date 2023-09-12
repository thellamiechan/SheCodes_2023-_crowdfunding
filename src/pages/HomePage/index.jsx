import useProjects from "../../hooks/useProjects";
import ProjectCard from "../../components/ProjectCards";
import "./HomePage.css";

function HomePage() {
    const { projects } = useProjects();
    console.log(projects)
    return (
        <div id="project-list">
            {projects.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />;
            })}
        </div>
    );
}

export default HomePage;