import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useAuth } from '../../hooks/use-auth.js';
import useProject from "../../hooks/useProject";


function ProjectPage() {
  const { id } = useParams();
  const { project, isLoading, error } = useProject(id);
  const {auth, setAuth} = useAuth();
  if (isLoading) {
    return (<p> Loading...</p>)
  }

  if (error) {
    return (<p>{error.message}</p>)
  }

    return (
    <div>
      <img src={project.image_url} alt={project.title} />
      <h2>{project.title}</h2>
        <p>{project.synopsis}</p> 
      <h3>Created at: {project.date_created}</h3>
      <h3>{`Project is open to pledges: ${project.is_open}`}</h3>
      <h3>Pledges:</h3>
      <ul>
        {project.pledges.map((pledgeData, key) => {
            return (
                <li key={key}>
                   {pledgeData.amount} from {pledgeData.supporter} 
                </li>
            );
        })}
      </ul>
      {auth.token && (
      <>
        <Link to="/pledges/">Add a Pledge </Link>
        <Link to="/projects/:id">Edit Project </Link>
      </>
      )}
    </div> 
    );
}

export default ProjectPage;


    
