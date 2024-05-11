import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';
import axios from 'axios';
import './register.css';
const Register = () => {
  const [userData, setUserData] = useState({
    id: '',
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value }); // If the name is 'id', generate a new UUID

    if (name === 'id') {
      const id = uuidv4();
      setUserData({ ...userData, id });
    }
  }; // Declare the navigate function outside the handleSubmit function

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Send the user data to the server for registration

    axios
      .post('http://localhost:8002/users', userData)
      .then((response) => {
        // Handle successful registration
        alert('Registration successful:', response.data); // Use the navigate function to navigate to the home page

        navigate('/');
      })
      .catch((error) => {
        // Handle failed registration
        console.error('Registration failed:', error.response.data);
        alert('Registration failed, try again');
      });
  };

  return (
    <form className="registerForm" onSubmit={handleSubmit}>
      {' '}
      {/* <label htmlFor="id">ID</label>
      <input
        className="registerInput "
        type="number"
        name="id"
        value={userData.id}
        onChange={handleChange}
        placeholder="enter you id"
      /> */}
      <label htmlFor="username">Username:</label>{' '}
      <input
        className="registerInput "
        type="text"
        name="username"
        value={userData.username}
        onChange={handleChange}
        placeholder="enter prefered username"
      />
      <label htmlFor="email">Email:</label>{' '}
      <input
        className="registerInput "
        type="email"
        name="email"
        value={userData.email}
        onChange={handleChange}
        placeholder="enter email address"
      />
      <label htmlFor="password">Password:</label>{' '}
      <input
        className="registerInput "
        type="password"
        name="password"
        value={userData.password}
        onChange={handleChange}
        placeholder="create a password"
      />
      <input className="registerButton" type="submit" value="Register" />{' '}
    </form>
  );
};

export default Register;
