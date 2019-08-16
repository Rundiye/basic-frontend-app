import React, { Component } from 'react'
import moment from 'moment'

import tripService from '../services/trip-service'

class MyTrips extends Component {
  state = {
    mytrips: [],
  }

  componentDidMount() {
    tripService.getAllMyTrips()
    .then((response)=> {
      this.setState({
        mytrips: response.data.listOfMyTrips,
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  handleDeleteClick = (id) => {
    const {mytrips} = this.state;
    tripService.deleteOneTrip(id)
      .then(() => {
        const filteredTrips = mytrips.filter((singleTrip) => {
        return singleTrip._id !== id
        })
        this.setState({
          trips: filteredTrips,
        })
      })
  }

  render() {
    console.log('hereeee',this.state)
    const {mytrips} = this.state;
    return (
      <>
          <h2>List Of Trips</h2>
        <section className="list-container">
        
          {mytrips.length > 0 ? mytrips.map((trip) => {
            return (
              <article key={trip._id} className="app-container">
                <h3>Title: {trip.title}</h3>
                <p>Budget: {trip.budget}</p>
                <p>Start Date: {moment(trip.startDate).format('LL')} </p>
                <p>End Date: {moment(trip.endDate).format('LL')}</p>
                <button onClick={() => {
                  this.handleDeleteClick(trip._id)
                }}>X</button>
              </article>
            )
          }) : <p>You have no trips created</p>}
      </section>
      </>
    )
  }
}

export default MyTrips;