import { NavLink } from "react-router-dom";
import './NavBar.css'

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/quiz" className="nav-link">
        Pizza Sleuth
      </NavLink>
      <NavLink to="/userPage" className="nav-link">
        User page
      </NavLink>
    </nav>
  );
}

export default NavBar;
