import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from '../components/withAuth';
import Navbar from '../components/Navbar';
import ActivityList from '../components/ActivityList';
// import Explore from '../components/Explore'
// import Day from '../components/Day'
import tripService from '../services/trip-service';
import moment from 'moment';

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

    const { id: tripId } = this.state;

    return (
      <div>
        <div className="page-container">
          <h2 className="page-title">Dashboard</h2>
          {this.state.totalDays.map((day, index) => {
            return (
              <div key={day._id}>
                <section className="title-section">
                  <div>
                    <h2 className="title-style">
                      {moment(day.date).format('LL')}
                    </h2>
                  </div>
                  <div>
                    <Link to={`/newactivity/${day._id}/${tripId}`}>
                      <img
                        className="navbar-icon"
                        src="../../images/add-activity.png"
                        alt="icon add"
                      />
                    </Link>
                  </div>
                </section>
                <div>
                  <ActivityList
                    updateDashboard={this.getSingleTripData}
                    activities={day.activities}
                    tripId={tripId}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <Navbar />
      </div>
    );
  }
}

export default withAuth(Dashboard);
