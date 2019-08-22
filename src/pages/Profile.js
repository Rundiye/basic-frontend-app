import React, { Component } from 'react'

import withAuth from '../components/withAuth'
import Navbar from '../components/Navbar'

class Profile extends Component {

  handleLogout = () => {
    this.props.logout()
  };

  render() {
    return (
      <div>
        <div className="page-container">
          <h2>Profile</h2>
          <img src="../../images/icon-profile.png" alt="icon profile" width="150px"/>          
          <button className="button-style" onClick={() => {
              this.handleLogout();
            }}>
            LOGOUT
          </button>
        </div>
        <Navbar />
      </div>
    )
  }
}

export default withAuth(Profile);