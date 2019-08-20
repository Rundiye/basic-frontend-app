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

  // handleGoDashboard = (id) => {
   
  //   tripService.getSingleTrip(id)
  //   .then(() => {

  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
      
  // }

  render() {
    const {mytrips} = this.state;
    return (
      <>
          <h2>Upcoming trips</h2>
        <section className="list-container">
          {mytrips.length > 0 ? mytrips.map((trip) => {
            return (
              <article className="trip-text" key={trip._id}>
                  <h2>{trip.title}</h2>
                <div className="trip-container">
                  <button onClick={() => {
                    this.handleDeleteClick(trip._id)
                  }}>X</button>
                  <h2>{trip.destination}</h2>
                  <h3>{moment(trip.startDate).format('LL')} - {moment(trip.endDate).format('LL')} </h3>
                  <h3>Budget: {trip.budget}</h3>
                    <Link to={`/trips/${trip._id}/dashboard`}> 
                  <button>
                  Go to Dashboard
                  </button>
                  </Link>
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