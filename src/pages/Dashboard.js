
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import withAuth from '../components/withAuth'
import Navbar from '../components/Navbar';
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
    id: this.props.match.params.id
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
    const {startDate, endDate} = this.state;
    const start = new Date(startDate)
        const end = new Date(endDate)
  
        const getDateArray = (startDate, endDate) => {
          const arr = new Array();
          const dt = new Date(start);
          while (dt <= end) {
              arr.push(new Date(dt));
              dt.setDate(dt.getDate() + 1);
          }
          return arr;
        }
      
        let dateArr = getDateArray(startDate, endDate)
   
    return (
      <div>
        <h1>Hellooo</h1>
        {dateArr.map((day, index) => {
            return (
              <div key={index}>
                <h2>
                  {moment(day.toLocaleDateString()).format('LL')}
                </h2>
                <button>
                <Link className="button-text" to='/newactivity' />
                  Add Activity
                </button>
                  
                <div>
                  <h3>Activities</h3>
                </div>
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