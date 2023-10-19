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
        <body>
        <div className='hero'>
            <img src='src/images/reading_on_the_moon_300x300.png' alt='girl-reading-on-moon'/>
            <h1>A crowdfunding platform for self-publishing books</h1>
        <ol>
            <p>1. Post your book idea for others to see. </p>
            <p>2. Decide how much you need to accomplish your publishing goals.</p>
            <p>3. Allow Bookarina to help you achieve your self-publishing dreams.</p>
        </ol>    
        </div>
        <div className="project-list">
            {projects.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />;
            })}
        </div>
        </body>
    );
}

export default HomePage;
