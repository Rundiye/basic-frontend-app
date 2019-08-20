
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import withAuth from '../components/withAuth'
import Navbar from '../components/Navbar';
import ActivityList from '../components/ActivityList'
import Explore from '../components/Explore'
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
    isLoading: true
  }

  componentDidMount() {
      this.getAllTrips()
  }

  getAllTrips = () => {
    tripService.getSingleTrip(this.state.id)
    .then((response)=> {
      const {startDate, endDate, totalDays, budget} = response.data
      
      this.setState({
        startDate,
        endDate,
        totalDays,
        budget,
        isLoading: false
      })
      })
      .catch((error) => {
        console.log(error);
      })
}


  render() {
    console.log("RENDERING");
    console.log("HERE", this.state.totalDays)

    return (
      <div>
        <div className="page-container">
          <h2 className="page-title">Dashboard</h2>
          {this.state.totalDays.map((day, index) => {
              return (
                <div key={day._id}>
                  <section className="title-section">
                    <div>
                      <h2 className="title-style">
                        {moment(day.date).format('LL')}
                      </h2>
                    </div>
                    <div>
                      <Link to={`/newactivity/${day._id}`}> 
                        {/* <button>
                          Add activity
                        </button> */} 
                        <img className="navbar-icon" src="../images/add-activity.png" alt="icon add"/>
                      </Link>
                    </div>
                  </section>
                  <div> 
                    <ActivityList activities={day.activities} />
                  </div>
                  <section>
                    <Explore />
                  </section>
                </div>
              )
          })
        }
        </div>
        <Navbar /> 
      </div>
    )
  }
}
      


export default withAuth(Dashboard);