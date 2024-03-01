import { NavLink } from "react-router-dom";
import './NavBar.css'

function NavBar() {
  return (
    <div>
          <h1>Slice Sleuth</h1>
          <nav className="navbar">
              <ul>
                <li><NavLink to="/" className="nav-link">Home</NavLink></li>
                <li><NavLink to="/quiz" className="nav-link">Slice Sleuth</NavLink></li>
                <li><NavLink to="/userPage" className="nav-link">User Info</NavLink></li> 
              </ul>
          </nav>
    </div>
  );
}

export default NavBar;
