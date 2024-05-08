import { useState, useEffect } from "react";
import axios from "axios";
/* import "./style.css"; */
function SignIn() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [showCreateAccount, setShowCreateAccount] = useState(false);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // This effect runs when the component is first mounted
    const fetchUser = async () => {
      try {
        const response = await axios.get("/api/user");
        if (response.data.isLoggedIn) {
          // The user is already logged in, so redirect them to the dashboard or another appropriate page
        }
      } catch (err) {
        // Handle any errors that occur while checking the user's login status
      }
    };

    fetchUser(); //call the function

    async function handleCreateAccount(e) {
      e.preventDefault();

      setLoading(true);
      setError("");

      try {
        // Send the create account request to the server
        const response = await axios.post("/api/users", formData);

        // Handle the response and perform necessary actions
        const data = await response.json();
        if (response.ok) {
          // Account created successfully
          // Do something with the response data (e.g., store the user information in the state)
        } else {
          // Account creation failed
          setError(data.error);
        }
      } catch (err) {
        // Handle network or server errors
        setError(
          "Sorry, an error occurred while creating your account. Please try again."
        );
      } finally {
        setLoading(false);
      }
    }
  });

  function handleChange(e) {
    // Create a new formData state with the updated target
    const newFormData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newFormData);
  }
  async function handleCreateAccount(e) {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      // Send the create account request to the server
      const response = await axios.post("/api/users", formData);

      // Handle the response and perform necessary actions
      const data = await response.json();
      if (response.ok) {
        // Account created successfully
        // Do something with the response data (e.g., store the user information in the state)
      } else {
        // Account creation failed
        setError(data.error);
      }
    } catch (err) {
      // Handle network or server errors
      setError(
        "Sorry, an error occurred while creating your account. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }
  async function handleLogin(e) {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      // Send the login request to the server
      const response = await axios.post("/api/login", formData);

      // Handle the response and perform necessary actions
      const data = await response.json();
      if (response.ok) {
        // Login successful
        // Do something with the response data (e.g., store the user information in the state)
      } else {
        // Login failed
        setError(data.error);
      }
    } catch (err) {
      // Handle network or server errors
      setError("Sorry, an error occurred while logging in. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="form-container">
      <h1>Sign In</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label className="form-label" for="username">
            Username
          </label>
          <input
            className="form-control"
            id="username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label" for="password">
            Password
          </label>
          <input
            className="form-control"
            id="password"
            type="password"
            name="password"
            value={formData.password}
          />
        </div>

        {error && <div className="error-message">{error}</div>}

        <div className="button-container">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Loading..." : "Login"}
          </button>

          <div>
            <span>Not a registered user? </span>
            <button
              type="button"
              onClick={() => setShowCreateAccount(true)}
              className="btn btn-link"
            >
              Create an account
            </button>
          </div>
        </div>
      </form>

      {showCreateAccount && (
        <div>
          <h1>Create Account</h1>

          <form onSubmit={handleCreateAccount}>
            <div className="form-group">
              <label className="form-label" for="username">
                Username
              </label>
              <input
                className="form-control"
                id="username"
                type="text"
                name="username"
                value={formData.username}
              />
            </div>
            <label for="password">Password</label>
            <div>
              <input
                id="password"
                type="password"
                name="password"
                value={formData.password}
              />
            </div>

            {error && <div className="error-message">{error}</div>}

            <button type="submit" disabled={loading}>
              {loading ? "Loading..." : "Create Account"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
export default SignIn;
