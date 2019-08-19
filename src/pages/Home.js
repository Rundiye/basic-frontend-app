import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import withAuth from '../components/withAuth'
import Navbar from '../components/Navbar';
// import TripsList from '../components/TripsList';
import MyTrips from '../components/MyTrips';



class Home extends Component {

  render(props) {
    
    return (
      <div className="page-container">
        <h1>Welcome back!</h1>
        <button className="button-style">
            <Link className="button-text"to='/createtrip'>Create a New Trip</Link>
          </button>
        {/* <TripsList /> */}
        <MyTrips />
        <Navbar />
       
      </div>
    )
  }
}

export default withAuth(Home)