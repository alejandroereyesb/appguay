import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
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
        </ul>
      </nav>
    );
  }
}

export default Nav;