import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
import withAuth from '../components/withAuth'
import Navbar from '../components/Navbar';
// import TripsList from '../components/TripsList';
import MyTrips from '../components/MyTrips';
import Explore from '../components/Explore'



class Home extends Component {

  render(props) {
    
    return (
      <div className="container">
        <h2>Welcome back!</h2>
        {/* <TripsList /> */}
        <MyTrips />

        
        <Explore />
        
        <Navbar />
       
      </div>
    )
  }
}

export default withAuth(Home)