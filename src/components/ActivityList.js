import React, { Component } from 'react'
import Activity from './Activity'
import activityService from '../services/activity-service'

class ActivityList extends Component {

  // state = {
  //   activities: [],
  //   totalDays: []
  // }

  // componentDidMount() {
  //   activityService.getAllActivities()
  //   .then((response)=> {
  //     this.setState({
  //       totalDays: response.data,
  //       })
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // }

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
  

render() {
  console.log('hello', this.props.activities)
  const {activities} = this.props;
    return (
      <div>

   {activities ? activities.map((activity) => {
     return (
       <article className="trip-text" >
         
         <Activity activity={activity}/>
       </article>
     )
   }) : null}
      
      </div>
      )
              }
}
export default  ActivityList;


  
  

