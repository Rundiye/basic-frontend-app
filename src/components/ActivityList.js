import React from 'react';
import withAuth from '../components/withAuth';
import Activity from './Activity';


const ActivityList = props => {
  const { activities, updateDashboard, tripId } = props;
  return (
    <div>
      {activities
        ? activities.map((activity, index) => {
            return (
              <article className="activity-card" key={activity._id}>
                <Activity
                  updateDashboard={updateDashboard}
                  activity={activity}
                  tripId={tripId}
                />
              </article>
            );
          })
        : null}
    </div>
  );
};

export default withAuth(ActivityList);
