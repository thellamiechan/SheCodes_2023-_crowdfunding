import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import postUser from '../../api/postUser';

function CreateUser() {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false);
    const [userData, setUserData] = useState({
        username: "",
        password: "",
        email: "",
    });

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.id]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)

        postUser(userData)
            .then(() => {
                navigate('/login/')
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
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    placeholder='Choose a Username'
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    placeholder='Set a Password'
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    placeholder='Enter Your Email Address'
                    onChange={handleChange}
                />
            </div>
            <input type="submit" value="Sign Up" />
        </form>
    );
};

export default CreateUser