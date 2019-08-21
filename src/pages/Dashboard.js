import React, { Component } from 'react';
import withAuth from '../components/withAuth';
import Navbar from '../components/Navbar';
// import Explore from '../components/Explore'
// import Day from '../components/Day'
import tripService from '../services/trip-service';
import ShowActivityList from '../components/ShowActivityList';


// const arrFormats = null;

class Dashboard extends Component {
  state = {
    startDate: '',
    endDate: '',
    budget: 0,
    totalDays: [],
    id: undefined,
  };


  componentDidMount() {
    console.log('COMPONENT DID MOUNT');
    this.setState({ id: this.props.match.params.id }, () => {
      this.getSingleTripData();
    });
  }

  getSingleTripData = () => {
    tripService
      .getSingleTrip(this.state.id)
      .then(response => {
        console.log(response);

        const { startDate, endDate, totalDays, budget } = response.data;
        // console.log('DATA FROM API', response.data);

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
    console.log('STATE IN RENDER', this.state);
    console.log(this.props)
    const { id: tripId } = this.state;
    // const {activity, updateDashboard} = this.props

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
