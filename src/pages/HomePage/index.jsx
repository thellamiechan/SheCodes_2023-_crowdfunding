import useProjects from "../../hooks/useProjects";
import ProjectCard from "../../components/ProjectCards";
import "./HomePage.css";

function HomePage() {
    const { projects, isLoading, error} = useProjects();

    if (isLoading) {
        return (<p> Loading...</p>)
      }
    
      if (error) {
        return (<p>{error.message}</p>)
      }
      
    return (
        <div className="project-list">
            {projects.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />;
            })}
        </div>
    );
}

export default HomePage;
