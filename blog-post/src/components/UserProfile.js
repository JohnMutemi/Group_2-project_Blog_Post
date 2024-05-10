import React, { useContext, useState, useEffect } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import axios from "axios";

const UserProfile = () => {
  const { user } = useOutletContext(); // Access the user state from the context
  const navigate = useNavigate();

  const [userData, setUserData] = useState({});

  useEffect(() => {
    // Fetch the logged-in user's data from the server
    axios
      .get(`http://localhost:8002/users/${user.id}`)
      .then((res) => setUserData(res.data))
      .catch((err) => {
        console.error("Error fetching user data:", err);
        alert(
          "An error occurred while fetching your profile. Please try again later."
        );
        navigate("/");
      });
  }, []);

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make a PUT request to update the user's data in the database
    axios
      .put(`http://localhost:8002/users/${userData.id}`, userData)
      .then((res) => {
        alert("Profile updated successfully.");
        // Update the local user data with the updated data from the server
        setUserData(res.data);
        // Reset the form
        e.target.reset();
      })
      .catch((err) => {
        console.error("Error updating user data:", err);
        alert(
          "An error occurred while updating your profile. Please try again later."
        );
      });
  };

  return (
    <div>
      <h1>User Profile</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />

        <input type="submit" value="Update Profile" />
      </form>
    </div>
  );
};

export default UserProfile;
