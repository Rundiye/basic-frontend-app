import React, { Component } from 'react'
import withAuth from '../components/withAuth'
import Navbar from '../components/Navbar';
// import TripsList from '../components/TripsList';
import MyTrips from '../components/MyTrips';


class Home extends Component {

  render(props) {
    console.log(this.props.user)
    return (
      <div>
        <h1>Welcome back!</h1>
        {/* <TripsList /> */}
        <MyTrips />
        <Navbar />
      </div>
    )
  }
}

export default withAuth(Home)