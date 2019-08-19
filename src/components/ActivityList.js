// import React from 'react'

// const ActivityList = (props) => {

//   componentDidMount() {
//     tripService.getAllMyTrips()
//     .then((response)=> {
//       this.setState({
//         mytrips: response.data.listOfMyTrips,
//         })
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//   }

  
//   return (
//     <>
//       {props.activities.length > 0 ? props.activities.map((activity, index) => {
        
//         console.log(activity)
//         return (
//           <section key={index}>
//             <p>Address: {activity.address}</p>
//             <p>Price: {activity.price} </p>
//             <p>Description: {activity.description}</p>
//             <p>Type: {activity.activityType}</p>
//           </section>
//         )
//       }): <p>No activities</p>} 
//     </>
//   )
// }

// export default ActivityList;



import React, { Component } from 'react'
import activityService from '../services/activity-service'
// import ActivityDetail from "ActivityDetail";

class ActivityList extends Component {

  state = {
    activities: [],
    totalDays: []
  }

  componentDidMount() {
    activityService.getAllActivities()
    .then((response)=> {
      this.setState({
        totalDays: response.data,
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  // handleDeleteClick = (id) => {
  //   const {activities} = this.state;
  //   console.log(activities)
  //   activityService.deleteOneTrip(id)
  //     .then(() => {
  //       const filteredActivities = activities.filter((activity) => {
  //       return activity._id !== id
  //       })
  //       this.setState({
  //         activities: filteredActivities,
  //       })
  //     })
  // }
  // {/* <section>
  
// </section> */}
// {/* {Object.keys(activities).map((activity, index) => {
  //   return (
    //     <div key={index}>
    //       {activities.map((activity) => {
      //         return (
        //           <p key={activity._id}>{activity.title}</p>
        //         )
        //       })}
  //     </div>
  //   )
// })} */}
render() {
  console.log('hello', this.state.totalDays)
  // const {activities} = this.state;
  const { totalDays } =this.state;
    return (
      <div>

   {totalDays ? totalDays.map((day) => {
     return (
       <article className="trip-text" >
         <h1>HOLAAA</h1>
         <p>{day.activities.title}</p>
       </article>
       
     )
   }) : null}
      
      </div>
      )
              }
}
export default  ActivityList;


//     //  let backgroundColor = "blue";

//     // if (this.props.activity.activityType === "Flight"){
//     //    backgroundColor="#4DA651";
//     // }

//     // if (this.props.activity.activityType === "Accomodation"){
//     //   backgroundColor="#4DA651";
//     // }

//     // if (this.props.activity.activityType === "Food"){
//     //   backgroundColor="#4DA651";
//     // }

//     // if (this.props.activity.activityType === "Cultural"){
//     //   backgroundColor="#4DA651";
//     // }

//     // if (this.props.activity.activityType === "Nightlife"){
//     //   backgroundColor="#4DA651";
//     // }

//     // if (this.props.activity.activityType === "others"){
//     //   backgroundColor="#4DA651";
//     // }

  
  

