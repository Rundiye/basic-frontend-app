import React, { Component } from 'react'
import withAuth from '../components/withAuth'
import Navbar from '../components/Navbar';
import TripsList from '../components/TripsList';


class Home extends Component {

  render(props) {
    console.log(this.props.user)
    return (
      <div>
        <Navbar />
        <TripsList />
      </div>
    )
  }
}

export default withAuth(Home)