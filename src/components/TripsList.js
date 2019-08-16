import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'

import tripService from '../services/trip-service'

class TripsList extends Component {
  state = {
    trips: [],
  }

  componentDidMount() {
    tripService.getAllTrips()
      .then((response)=> {
        console.log(response)
        this.setState({
          trips: response.data.listOfTrips,
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  handleDeleteClick = (id) => {
    const {trips} = this.state;
    tripService.deleteOneTrip(id)
      .then(() => {
        const filteredTrips = trips.filter((singleTrip) => {
        return singleTrip._id !== id
        })
        this.setState({
          apps: filteredTrips,
        })
      })
  }

  render() {
    const {trips} = this.state;
    return (
      <>
          <h2>List Of Trips</h2>
        <section className="list-container">
          <button>
            <Link to='/createtrip'>Create a New Trip</Link>
          </button>
          {trips.length > 0 ? trips.map((trip) => {
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

export default TripsList;