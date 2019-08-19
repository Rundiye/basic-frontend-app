
import React, { Component } from 'react'
import withAuth from '../components/withAuth'
import Navbar from '../components/Navbar';
import Day from '../components/Day'
import moment from 'moment'


const arrFormats = null;

class Dashboard extends Component {
  state = {
    totalExpenses: 0,
    startDate: moment(localStorage.getItem('startDate'), arrFormats) || this.props.location.data.startDate,
    endDate: moment(localStorage.getItem('endDate'), arrFormats) || this.props.location.data.endDate,
    focusedInput: null,

    container: {
      id: 1, activities: []
    },
    days: []

  };

  fillDates = (startDate, endDate) => {

    let daysArr = [];

    if (startDate && endDate) {
      let days = moment
        .duration(endDate.diff(startDate))
        .asDays() + 1;

      //Create an array of day objects
      for (let index = 0; index < days; index++) {
        daysArr.push({
          id: index,
          title: startDate.clone().add(index, "days"),
          activities: [],
          expenses: 0
        });
      }
    }

    this.setState({ startDate, endDate, days: daysArr });

    return daysArr;
  }
 
  render() {
    return (
      <div>
        <Day />
        
     

        <Navbar />
      </div>
    )
  }
}

export default withAuth(Dashboard)