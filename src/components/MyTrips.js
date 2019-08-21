import React, { Component } from 'react';
import withAuth from '../components/withAuth';
import moment from 'moment';
import { Link } from 'react-router-dom';

import tripService from '../services/trip-service';

class MyTrips extends Component {
  state = {
    mytrips: [],
  };

  componentDidMount() {
    this.getAllTrips();
  }

  getAllTrips = () => {
    tripService
      .getAllMyTrips()
      .then(response => {
        this.setState({
          mytrips: response.data.listOfMyTrips,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleDeleteClick = id => {
    const { mytrips } = this.state;
    tripService.deleteOneTrip(id).then(() => {
      const filteredTrips = mytrips.filter(singleTrip => {
        return singleTrip._id !== id;
      });
      console.log('filtered trips', filteredTrips);

      this.setState({
        mytrips: filteredTrips,
      });
    });
  };


  render() {
    const { mytrips } = this.state;
    return (
      <>
        <div className="title-section">

        <h2>Upcoming trips</h2>
          <Link className="button-text" to="/createtrip">
            <img src="../../images/add-activity.png" alt="" width="40px"/>
          </Link>
        </div>
     
        <section>
          {mytrips.length > 0 ? (
            mytrips.map(trip => {
              return (
                <article className="trip-container" key={trip._id}>
                  <div>
                    <div className="title-div">
                    <h2>{trip.title}</h2>
                    <div className="title-div">
                    <Link to={`/trips/${trip._id}/dashboard`}>
                      <img className="home-icon" src="../../images/calendar.png" alt=""/>
                    </Link>
                      <div
                        onClick={() => {
                          this.handleDeleteClick(trip._id);
                        }}>
                        <img className="home-icon" src="../../images/icon-delete.png" alt=""/>
                      </div>
                    </div>
                  </div>
                    <div className="trip-info">
                      <h2>{trip.destination}</h2>
                      <h3>
                        {moment(trip.startDate).format('LL')} -{' '}
                        {moment(trip.endDate).format('LL')}{' '}
                      </h3>
                      <h3>Budget: {trip.budget} €</h3>
                    </div>
                  </div>
                </article>
              );
            })
          ) : (
            <p>You have no trips created</p>
          )}
        </section>
      </>
    );
  }
}

export default withAuth(MyTrips);
