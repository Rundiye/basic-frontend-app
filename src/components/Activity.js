import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from '../components/withAuth';

import activityService from '../services/activity-service';

const getColor = type => {
  let backgroundColor = 'blue';

  if (type === 'Flight') {
    backgroundColor = 'green';
  } else if (type === 'Accomodation') {
    backgroundColor = 'pink';
  } else if (type === 'Food') {
    backgroundColor = 'orange';
  } else if (type === 'Cultural') {
    backgroundColor = 'brown';
  } else if (type === 'Nightlife') {
    backgroundColor = 'blue';
  } else if (type === 'others') {
    backgroundColor = 'lightblue';
  }
  return backgroundColor;
};
class Activity extends Component {
  handleDeleteClick = id => {
    activityService.deleteOneActivity(id).then(() => {
      this.props.updateDashboard();
    });
  };

  render() {
    const { activity } = this.props;
    return (
      <article className={getColor(activity.activityType)}>
        <div className="activity-card">
          <div className="title-div">
            <h3 className="margin-text">{activity.title} </h3>
            <div className="title-div">
              <Link to={`/editactivity/${activity._id}`}>
                <img
                  className="icon-small"
                  src="../../images/icon-edit.png"
                  alt=""
                />
              </Link>
              <div
                onClick={() => {
                  this.handleDeleteClick(activity._id);
                }}>
                <img
                  className="icon-small"
                  src="../../images/icon-delete2.png"
                  alt=""
                />
              </div>
            </div>
            {/* <img src="../images/icon-delete2.png" alt=""/> */}
          </div>
          <div className="activity-info">
            <p>{activity.address}</p>
            {/* <p>{activity.description}</p> */}
            <div className="info-div">
              <p>Type: {activity.activityType}</p>
              <p className="price">{activity.price} €</p>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default withAuth(Activity);
