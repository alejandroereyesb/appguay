import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {UserContext} from '../../context/UserContext';
import './Nav.css';

function Nav() {
  const userCtx = useContext(UserContext);

  return (
      <nav className="main-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/staff">Quienes somos</Link>
          </li>
          <li>
            <Link to="/pokelist">Pokelist</Link>
          </li>
          <li>
            <Link to="/usestate">useState</Link>
          </li>
          <li>
            <Link to="/useeffect">useEffect</Link>
          </li>
          <li>
            <Link to="/topic">Topic</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          {userCtx.name?<li>
            <span>Hola {userCtx.name}</span> 
            <button className="button" onClick={userCtx.logout}>Logout</button>
            </li>
            :""}
        </ul>
      </nav>

      
  )
}

export default Nav
