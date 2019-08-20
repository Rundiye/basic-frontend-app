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
        <div className="activity-card">
          <div className="title-div">
            <h3 className="margin-text">{activity.title} </h3>
            <div className="title-div">
              <img className="icon-small" src="../../images/icon-edit.png" alt=""/>
              <img className="icon-small" src="../../images/icon-delete2.png" alt=""/>
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
    
  )
}

export default Activity
