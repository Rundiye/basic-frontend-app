import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from './withAuth'

class Navbar extends Component {
  render() {  
    return (
      <div>
        <ul>
          <li>
            <Link to='/home'>
              <img src="../images/home-icon.png" alt="icon home"/>
            </Link>
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    )
  }
}

export default withAuth(Navbar);