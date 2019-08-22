import React, { Component } from 'react'

import withAuth from '../components/withAuth'
import Navbar from '../components/Navbar';
import MyTrips from '../components/MyTrips';
import Explore from '../components/Explore'



class Home extends Component {
  render(props) {
    return (
      <div className="container">
        <div className="page-container">
          <h2>Welcome back!</h2>
          <MyTrips />
          <Explore />

        </div>
        <Navbar />
      </div>
    )
  }
}

export default withAuth(Home)