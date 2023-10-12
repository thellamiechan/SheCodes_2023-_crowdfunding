import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth.js';
import postPledge from '../../api/postPledge';

function CreatePledgePage() {
  const navigate = useNavigate()
  const { auth, setAuth } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [pledgeData, setPledgeData] = useState({
    amount: 0,
    comment: '',
    project: `projects/:id`,
    anonymous: false
  })
  console.log(pledgeData)
  // console.log(useProject(projectId));

  const handleChange = (e) => {
    setPledgeData({
      ...pledgeData,
      [e.target.id]: e.target.value
    })
  };

  const handleChecked = (e) => {
    setPledgeData({
      ...pledgeData,
      [e.target.id]: e.target.checked
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    postPledge(pledgeData)
      .then(() => {
        navigate('/')
      })
      .catch(() => {
        setIsLoading(false);
      })
  };

  if (isLoading) {
    return <p>Loading...</p>
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="amount">Amount</label>
        <input
          type="text"
          id="amount"
          placeholder='Enter the amount'
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="comment">Comment</label>
        <input
          type="text"
          id="comment"
          placeholder='Enter a comment'
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='anonymous'>Remain Anonymous?</label>
        <input
          type='checkbox'
          id='anonymous'
          onChange={handleChecked}
        />
      </div>
      <input type="submit" value="Pledge" />
    </form>
  );
};

export default CreatePledgePage