import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard(props) {
    const { projectData } = props;
    const projectPath= `project/${projectData.id}`;
    
    return (
        <div className="projectCard">
            <Link to={projectPath}>
                <img src={projectData.image} />  
                <h3>{projectData.title}</h3>
            </Link>
        </div>
    );
}
export default ProjectCard;