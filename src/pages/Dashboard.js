import React, { Component } from 'react';
import withAuth from '../components/withAuth';
import Navbar from '../components/Navbar';
import ShowActivityList from '../components/ShowActivityList';

import tripService from '../services/trip-service';


class Dashboard extends Component {
  state = {
    startDate: '',
    endDate: '',
    budget: 0,
    totalDays: [],
    id: undefined,
  };

  componentDidMount() {
    this.setState({ id: this.props.match.params.id }, () => {
      this.getSingleTripData();
    });
  }

  getSingleTripData = () => {
    tripService
      .getSingleTrip(this.state.id)
      .then(response => {
        const { startDate, endDate, totalDays, budget } = response.data;

        this.setState({
          startDate,
          endDate,
          totalDays,
          budget,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { id: tripId } = this.state;

    return (
      <div>
        <div className="page-container">
          <h2 className="page-title">Dashboard</h2>
          {this.state.totalDays.map((day, index) => {
            return (
              <ShowActivityList day={day} id={tripId} getOneTrip={this.getSingleTripData}/>
            );
          })}
        </div>
        <Navbar />
      </div>
    );
  }
}

export default withAuth(Dashboard);
