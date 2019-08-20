import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'


import withAuth from '../components/withAuth'
import activityService from '../services/activity-service'


class CreateActivity extends Component {
  state = {
    title: '',
    address: '',
    price: 0,
    description: '',
    activityType: '',
    dayId: this.props.match.params.id,
    tripId: '',
    redirect: false
  }

  handleOnChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value,
    })

  }

  handleSubmit = (event) => {
    const {title, address, price, description, activityType} = this.state;
    event.preventDefault();
   
    
    activityService.addOneActivity(this.state.dayId, {
      title, 
      address, 
      price, 
      description, 
      activityType
    })
    .then(response => {
      this.setState({
        tripId: response.data.trip[0],
        redirect: true
      })
    })
  }

  goToPreviousPage = () => {
    this.props.history.goBack();
  }



  render() {
    const {title, address, price, description, activityType, redirect, tripId} = this.state;
    return (
      <div className="createActivity-page">
        <button onClick={this.goToPreviousPage}>Go Back</button>
        
        <form className="createActivity-form" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" required onChange={this.handleOnChange} value={title}/>
          </div>

          <div>
            <label htmlFor="address">Address</label>
            <input type="text" name="address" id="address" required onChange={this.handleOnChange} value={address}/>
          </div>

          <div>
            <label htmlFor="description">Description</label>
            <input type="text" name="description" id="description" required onChange={this.handleOnChange} value={description}/>
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input type="number" name="price" id="price" required onChange={this.handleOnChange} value={price}/>
          </div>

          <div>
            <label htmlFor="activityType">Type</label>
            <select name="activityType" id="activityType" onChange={this.handleOnChange} value={activityType}>
              <option value="Flight">Flight</option>
              <option value="Accomodation">Accomodation</option>
              <option value="Food">Food</option>
              <option value="Cultural">Cultural</option>
              <option value="Nightlife">Nightlife</option>
              <option value="others">others</option>
          </select>
          </div>

          
          <button onClick={this.goToPreviousPage}>
            { redirect ? <Redirect to={`/trips/${tripId}/dashboard`}/> : null }
            Add Activity</button>

        </form>
      

      </div>
    )
  }
}

export default withAuth(CreateActivity);
