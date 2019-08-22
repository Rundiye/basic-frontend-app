import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ActivityList from '../components/ActivityList';


import moment from 'moment';

class ShowActivityList extends Component {
  state = {
    day: this.props.day,
    tripId: this.props.id,
    isHidden: true
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {
    const {day, tripId} = this.state;

    return (
      <div>
        <div key={day._id}>
          <section className="title-section">
            <div onClick={this.toggleHidden.bind(this)}>
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
          {!this.state.isHidden && 
            <ActivityList
              updateDashboard={this.props.getOneTrip}
              activities={day.activities}
              tripId={tripId}
            />
            }
          </div>
        </div>
      </div>
    )
  }
}

export default ShowActivityList;
