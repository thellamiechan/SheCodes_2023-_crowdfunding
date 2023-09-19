import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import postProject from '../../api/postProject'

function createProject(props) {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [projectData, setProjectData]= useState({
        title: '',
        synopsis: '',
        goal: 0,
        image: '',
        is_open: false,
        date_created: Date().toLocaleString(),
        owner: props.userId,
    })
      
    const handleChange = (e) => {
        setProjectData({
            ...pledgeData, 
            [e.target.id]: e.target.value
        })
    } 
        
    const handleChecked = (e) => {
        setProjectData({
            ...pledgeData,
            [e.target.id]: e.target.checked
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
    
        postProject(projectData)
          .then(() => {
            navigate(0)
          })
          .catch(() => {
            setIsLoading(false)
        })
    }

    if(isLoading) {
        return <p>Loading...</p>
    } 
      
    return (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input 
              type="text" 
              id="title" 
              placeholder='Enter the title of your book' 
              onChange={handleChange} 
            />
          </div>
          <div>
            <label htmlFor="synopsis">Synopsis</label>
            <input 
              type="text" 
              id="synopsis" 
              placeholder='Give a synopsis of your book' 
              onChange={handleChange} 
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
          <input type="submit" value="project" />
        </form>
      )    
    }

    export default createProject