
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import withAuth from '../components/withAuth'
import Navbar from '../components/Navbar';
import ActivityList from '../components/ActivityList'
// import Day from '../components/Day'
import tripService from '../services/trip-service'
import moment from 'moment'


// const arrFormats = null;

class Dashboard extends Component {

  state = {
    startDate: '',
    endDate: '',
    budget: 0,
    totalDays: [],
    id: this.props.match.params.id,
  }

  componentDidMount() {
    
    tripService.getSingleTrip(this.state.id)
    .then((response)=> {

      const {startDate, endDate, totalDays, budget} = response.data
      this.setState({
        startDate,
        endDate,
        totalDays,
        budget
      })
     
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    // const {startDate, endDate} = this.state;
    // const start = new Date(startDate)
    //     const end = new Date(endDate)
  
    //     const getDateArray = (startDate, endDate) => {
    //       const arr = new Array();
    //       const dt = new Date(start);
    //       while (dt <= end) {
    //           arr.push(new Date(dt));
    //           dt.setDate(dt.getDate() + 1);
    //       }
    //       return arr;
    //     }
      
    //     let dateArr = getDateArray(startDate, endDate)
   
    //     const {activities} = this.state
    return (
      <div>
        <h2>Dashboard</h2>
        {this.state.totalDays.map((day, index) => {
            return (
              <div key={index}>
                <h2>
                  {moment(day.date).format('LL')}
                </h2>
                <Link to={`/newactivity/${day._id}`}> 
                  <button>
                  Add activity
                  </button>
                  </Link>
                  
                <div>
                  <h3>Activities</h3>
                  
                  <ActivityList />

                </div>
                {/* {activities.length > 0 ? activities.map((activity) => {
            return (
              <article key={activity._id}>
                  <h2>{activity.title}</h2>
                
              </article>
            )
          }) : <p>You have no activities</p>} */}
              </div>
            )
        })
      }
        <Navbar /> 
      </div>
    )
  }
}
      


export default withAuth(Dashboard);