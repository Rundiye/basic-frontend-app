import React, { Component } from 'react'
import withAuth from '../components/withAuth'
import Navbar from '../components/Navbar'

class Profile extends Component {
  render() {
    
    return (
      <div>
        <div className="page-container">
          <h2>Profile</h2>
          <img src="../../images/icon-profile.png" alt="" width="150px"/>
          
        </div>
          <Navbar />
      </div>
    )
  }
}

export default withAuth(Profile);