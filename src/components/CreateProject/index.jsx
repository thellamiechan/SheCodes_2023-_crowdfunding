import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth.js';
import postProject from '../../api/postProject';
import './CreateProject.css'

function CreateProject(props) {
  const navigate = useNavigate()
  const { auth, setAuth } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [projectData, setProjectData] = useState({
    title: '',
    synopsis: '',
    goal: 0,
    image: '',
    is_open: false
  })

  console.log(projectData);
  console.log(props.userID);

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

    postProject(projectData)
      .then(() => {
        navigate("/")
      })
      .catch(() => {
        setIsLoading(false);
        console.log("postProject Failed")
      });
  }
  if (isLoading) {
    return (<p> Loading...</p>)
  }

  return (
    <form className='projectform'>
      {/* <form onSubmit={handleSubmit}> */}
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
        <label htmlFor="goal">Goal</label>
        <input
          type="text"
          id="goal"
          placeholder='Crowdfunding Goal'
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='image'>Image link</label>
        <input
          type='text'
          id='image'
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
      <button type='submit' onClick={handleSubmit}>
        Submit it
      </button>

    </form>

  )
}

export default CreateProject