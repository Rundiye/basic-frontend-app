import React, { Component } from 'react'
import moment from 'moment'
import {Link} from 'react-router-dom'

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
    const {mytrips} = this.state;
    return (
      <>
          <h2>My Trips</h2>
        <section className="list-container">
          {mytrips.length > 0 ? mytrips.map((trip) => {
            return (
              <article key={trip._id}>
                  <h2>{trip.title}</h2>
                <div className="trip-container">
                  <button onClick={() => {
                    this.handleDeleteClick(trip._id)
                  }}>X</button>
                  <h2>{trip.destination}</h2>
                  <p>Start Date: {moment(trip.startDate).format('LL')} </p>
                  <p>End Date: {moment(trip.endDate).format('LL')}</p>
                  <p>Budget: {trip.budget}</p>
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

export default MyTrips;