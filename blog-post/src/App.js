// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import Register from './components/register';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthChange = (status) => {
    setIsAuthenticated(status);
  };
  const handleLogout = () => {
    // Perform any logout-related actions here, such as clearing local storage, etc.
    // For now, let's assume we're just updating the authentication status
    setIsAuthenticated(false);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/signin"
        element={<SignIn onAuthChange={handleAuthChange} />}
      />
      <Route
        path="/register"
        element={<Register onAuthChange={handleAuthChange} />}
      />
    </Routes>
  );
}

export default App;
