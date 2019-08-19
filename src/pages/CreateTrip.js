import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {extendMoment} from 'moment-range'
import Moment from 'moment'

import withAuth from '../components/withAuth'
import tripService from '../services/trip-service'
const moment = extendMoment(Moment)

class CreateTrip extends Component {
  state = {
    title: '',
    destination: '',
    startDate: '',
    endDate: '',
    description: '',
    budget: 0,
    totalDays: 0,
    userId: this.props.user._id
  }

  handleOnChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value,
    })

  }

  handleSubmit = (event) => {
    const {title, destination, startDate, endDate, description, budget} = this.state;
    event.preventDefault();
    const totalDays = this.daysLeft(startDate, endDate)
   
    
    tripService.addOneTrip({
      title, 
      destination, 
      startDate, 
      endDate, 
      description, 
      budget,
      totalDays,
    })
    .then(response => {
      this.setState({
        redirect: true,
      })
    })
    .catch(error => console.log(error))
  }

  daysLeft = () => {

    const {startDate, endDate} = this.state;
    const range = moment.range(startDate, endDate)
    let amount = range.diff();
    const diff = new moment.duration(amount)
    
    const totalDays = diff._data.days
    return totalDays
  }

  goToPreviousPage = () => {
    this.props.history.goBack();
  }



  render() {
    const {title, destination, startDate, endDate, description, budget, redirect} = this.state;
    return (
      <div className="createTrip-page">
        <button onClick={this.goToPreviousPage}>Go Back</button>
        <form className="createTrip-form" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" required onChange={this.handleOnChange} value={title}/>
          </div>

          <div>
            <label htmlFor="destination">Destination</label>
            <input type="text" name="destination" id="destination" required onChange={this.handleOnChange} value={destination}/>
          </div>

          <div>
            <label htmlFor="startDate">Start Date</label>
            <input type="date" name="startDate" id="startDate" required onChange={this.handleOnChange} value={startDate}/>
          </div>

          <div>
            <label htmlFor="endDate">End Date</label>
            <input type="date" name="endDate" id="endDate" required onChange={this.handleOnChange} value={endDate}/>
          </div>

          <div>
            <label htmlFor="description">Description</label>
            <input type="text" name="description" id="description" onChange={this.handleOnChange} value={description}/>
          </div>

          <div>
            <label htmlFor="budget">Budget</label>
            <input type="number" name="budget" id="budget" required onChange={this.handleOnChange} value={budget}/>
          </div>
          
          <button>Add new Trip</button>
        </form>

        {redirect ? <Redirect to='/home' /> : null} 

      </div>
    )
  }
}

export default withAuth(CreateTrip);








