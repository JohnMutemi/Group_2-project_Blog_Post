import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/signin" className="nav-link">
        SignIn
      </NavLink>
    </nav>
  );
}

export default NavBar;
