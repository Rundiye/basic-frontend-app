import React from 'react'

const getColor = (type) => {
  
      let backgroundColor = "blue";

     if (type === "Flight"){
        backgroundColor="green";
     }

     else if (type === "Accomodation"){
       backgroundColor="pink";
     }

     else if (type === "Food"){
       backgroundColor="orange";
     }

     else if (type === "Cultural"){
       backgroundColor="brown";
     }

     else if (type === "Nightlife"){
       backgroundColor="blue";
     }

     else if (type === "others"){
       backgroundColor="lightblue";
     }
     return backgroundColor;

}
const Activity = (props) => {
  const {activity} = props
  return (
      <article className={getColor(activity.activityType)}>
        <div>
          <p>{activity.title} - {activity.activityType}</p>
          <p>{activity.address} - {activity.price} - {activity.description}</p> 
        </div>
       </article>    
    
  )
}

export default Activity
