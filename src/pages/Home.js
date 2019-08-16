import React, { Component } from 'react'
import withAuth from '../components/withAuth'
import Navbar from '../components/Navbar';
import TripsList from '../components/TripsList';
import MyTrips from '../components/MyTrips';


class Home extends Component {

  render(props) {
    console.log(this.props.user)
    return (
      <div>
        <Navbar />
        <TripsList />
        <h1>List of my Trips</h1>
        <MyTrips />
      </div>
    )
  }
}

export default withAuth(Home)