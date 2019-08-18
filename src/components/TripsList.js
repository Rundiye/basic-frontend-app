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
          trips: filteredTrips,
        })
      })
  }

  render() {
    const {trips} = this.state;
    return (
      <>
          <h2>List Of Trips</h2>
        <section className="list-container">
          <button className="button-style">
            <Link className="button-text"to='/createtrip'>Create a New Trip</Link>
          </button>
          {trips.length > 0 ? trips.map((trip) => {
            return (
              <article key={trip._id}>
                  <h2>{trip.title}</h2>
                <div className="trip-container">
                  <button onClick={() => {
                    this.handleDeleteClick(trip._id)
                  }}>X</button>
                  <h2>{trip.destination}</h2>
                  <p>Trip Dates: {moment(trip.startDate).format('LL')} - {moment(trip.endDate).format('LL')}</p>
                  <p>Budget: {trip.budget} Euros</p>
                  <button>
                  <Link to='/trips/:id/dashboard'>Go to Dashboard</Link>
                  </button>
                </div>
              </article>
            )
          }) : <p>You have no trips created</p>}
      </section>
      </>
    )
  }
}

export default TripsList;