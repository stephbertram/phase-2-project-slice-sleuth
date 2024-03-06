import { NavLink } from "react-router-dom";
import './NavBar.css'

function NavBar() {
  return (
    <div>
          <h1 className='title'>Slice Sleuth<img className ='logo' src='../images/logo.png' alt='pizza-sleuth-logo'/></h1>
          <nav className="navbar">
              <ul>
                <li><NavLink to="/" className={({isActive}) => isActive ? 'active nav-link' : 'nav-link'}>Home</NavLink></li>
                <li><NavLink to="/quiz" className={({isActive}) => isActive ? 'active nav-link' : 'nav-link'}>Slice Sleuth</NavLink></li>
                <li><NavLink to="/scores" className={({isActive}) => isActive ? 'active nav-link' : 'nav-link'}>Scores</NavLink></li> 
              </ul>
          </nav>
    </div>
  );
}

export default NavBar;
