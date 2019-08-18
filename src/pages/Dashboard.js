
import React, { Component } from 'react'
import withAuth from '../components/withAuth'
import Navbar from '../components/Navbar';


class Dashboard extends Component {
  // state = {
  //   days: [],
  //   activities: []
  // }

  // componentDidMount() {
  //   tripService.getAllTrips()
  //     .then((response)=> {
  //       this.setState({
  //         trips: response.data.listOfTrips,
  //       })
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // }
  render() {
    return (
      <div>
        
        <Navbar />
      </div>
    )
  }
}

export default withAuth(Dashboard)