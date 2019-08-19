import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from './withAuth'

class Navbar extends Component {
  render() {  
    return (
      <nav className="navbar">
        <ul>
          <li>
            <Link to='/home'>
              <img className="navbar-icon" src="../images/home-icon.png" alt="icon home"/>
            </Link>
          </li>
          <li>
            <Link to='/profile'>
              <img className="navbar-icon" src="../images/user-icon.png" alt="icon user"/>
            </Link>
          </li>
          <li>
            <Link to='/home'>
                <img className="navbar-icon" src="../images/like.png" alt="icon favorite"/>
            </Link>
          </li>
          <li>
            <Link to='/createtrip'>
                <img className="navbar-icon" src="../images/icon-add.png" alt="icon add"/>
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default withAuth(Navbar);