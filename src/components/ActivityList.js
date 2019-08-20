import React from 'react'
import Activity from './Activity'


const ActivityList = (props) =>  {
  

    const {activities} = props;
      return (
        <div>
          {activities ? activities.map((activity, index) => {
            return (
              <article className="activity-card" key={index} >
                <Activity activity={activity}/>
              </article>
            )
          }) : null}  
        </div>
        )
}
export default  ActivityList;


  
  

