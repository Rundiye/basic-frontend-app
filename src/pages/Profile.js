import React, { Component } from 'react'
import withAuth from '../components/withAuth'
import Navbar from '../components/Navbar'

class Profile extends Component {
  render() {
    
    return (
      <div>
        <h1>Profile</h1>
        <Navbar />
      </div>
    )
  }
}

export default withAuth(Profile);