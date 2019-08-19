import React, { Component } from 'react'
// import ActivityDetail from "ActivityDetail";

class Activity extends Component {
  render() {
    //  let backgroundColor = "blue";

    // if (this.props.activity.activityType === "Flight"){
    //    backgroundColor="#4DA651";
    // }

    // if (this.props.activity.activityType === "Accomodation"){
    //   backgroundColor="#4DA651";
    // }

    // if (this.props.activity.activityType === "Food"){
    //   backgroundColor="#4DA651";
    // }

    // if (this.props.activity.activityType === "Cultural"){
    //   backgroundColor="#4DA651";
    // }

    // if (this.props.activity.activityType === "Nightlife"){
    //   backgroundColor="#4DA651";
    // }

    // if (this.props.activity.activityType === "others"){
    //   backgroundColor="#4DA651";
    // }

    return (
      <div>
        {/* onDragStart={e =>
          this.props.onDragStart(
            e,
            { from: this.props.from, id: this.props.id },
            this.props.activity
          )
        }
        draggable
        className="draggable"
        <div onClick={this.handleClick} className="card-details">
        <ActivityDetail 
            activity={this.props.activity}
            updateActivity={this.props.updateActivity}
            deleteActivity={this.props.deleteActivity}
          >
            {this.props.activity.title}
          </ActivityDetail>
        </div> */}
      </div>
    )
  }
}

export default  Activity;