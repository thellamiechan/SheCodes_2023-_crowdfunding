import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth.js';
import putProject from '../../api/putProject.js';

function ChangeProject(props) {
    const navigate = useNavigate();
    const {auth, setAuth} = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [projectData, setProjectData]= useState({
        title: '',
        synopsis: '',
        goal: 0,
        image: '',
        is_open: false,
  })
    const handleChange = (e) => {
      setProjectData({
        ...projectData, 
        [e.target.id]: e.target.value
    })
  } 
    
    const handleChecked = (e) => {
      setProjectData({
        ...projectData,
        [e.target.id]: e.target.checked
    })
  }

    const handleSubmit = (e) => {
      e.preventDefault()
      setIsLoading(true)

      putProject(projectData)
        .then(() => {
          navigate(0)
        })
        .catch (() => {
          setIsLoading(false);
        })
  }
    if(isLoading) {
      return <p>Loading...</p>
    };


return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input 
          type="text" 
          id="title" 
          placeholder='Edit the title of your book' 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label htmlFor="synopsis">Synopsis</label>
        <input 
          type="text" 
          id="synopsis" 
          placeholder='Edit the synopsis of book' 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label htmlFor="goal">Goal</label>
        <input 
          type="text"
          id="goal"
          placeholder='Crowdfunding Goal'
          onChange={(handleChange)}
        />
      </div>
      <div>
        <label htmlFor='is_open'>Open for pledges?</label>
        <input
          type='checkbox'
          id='is_open'
          onChange={handleChecked}
        />
      </div>
      <input type="submit" value="Submit your Changes" />
    </form>
  )    
}

export default ChangeProject