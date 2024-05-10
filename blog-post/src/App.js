import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import SearchingBlog from './components/Searchingblog';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
const handleSearch = (searchQuery) => {
  
}
  const navigate = useNavigate();

  const login = () => {
    setIsAuthenticated(true);
    navigate('/'); 
  };

  const logout = () => {
    setIsAuthenticated(false);
    navigate('/signin');
    alert('I have been clicked');
  };

  useEffect(() => {
    // Existing code
    if (isAuthenticated) {
      navigate('/');
    } else {
      navigate('/signin');
    }

    const fetchBlogData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch('/api/blogs');
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        setError('Failed to fetch blog data.');
        console.error('Error fetching blogs:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogData();
  }, [isAuthenticated, navigate]);

  return (
    <div className="app">
      {/* Add conditional rendering so users have to be logged in to see pages on the site */}
      {isAuthenticated ? (
        <div>
          <NavBar logout={logout} />
          {isLoading ? (
            <p>Loading blog data...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <SearchingBlog blogs={blogs} />
          )}
        </div>
      ) : (
        <Navigate to="/login" />
      )}
      <Outlet context={{ logout, login }} />
    </div>
  );
}

export default App;