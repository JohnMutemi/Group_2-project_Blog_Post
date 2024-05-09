// src/pages/SignIn.js
import './SignIn.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignIn({ onAuthChange }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.get('http://localhost:8002/users', formData);
      if (response.status === 200) {
        onAuthChange(true);
        navigate('/');
      } else {
        setError('Invalid username or password.');
      }
    } catch (err) {
      setError('Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <div className="button-container">
          <button type="submit" disabled={loading}>
            {loading ? 'Loading...' : 'Login'}
          </button>
          <div>
            <span>Not a registered user? </span>
            <button
              type="button"
              onClick={() => navigate('/register')}
              className="btn btn-link">
              Create an account
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
