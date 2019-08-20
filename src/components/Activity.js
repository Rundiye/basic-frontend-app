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
        <p>{activity.title} - {activity.activityType}</p>
        <p>{activity.description}</p>
        <p>{activity.address}</p> 
        <p>{activity.price}</p>
       </article>    
    
  )
}

export default Activity
