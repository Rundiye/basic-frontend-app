import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import withAuth from '../components/withAuth';
import activityService from '../services/activity-service';

class CreateActivity extends Component {
  state = {
    title: '',
    address: '',
    price: 0,
    description: '',
    activityType: 'Flight',
    dayId: this.props.match.params.id,
    tripId: this.props.match.params.tripId,
    // tripId: '',
    // redirect: false
  };

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    const {
      title,
      address,
      price,
      description,
      activityType,
      tripId,
    } = this.state;
    event.preventDefault();

    activityService
      .addOneActivity(this.state.dayId, {
        title,
        address,
        price,
        description,
        activityType,
        trip: tripId,
      })
      // .then(response => this.props.me())
      // .catch(error => console.log(error))

      .then(({ data }) => {
        console.log('actividad', data);

        this.props.history.push({
          pathname: `/trips/${tripId}/dashboard`,
          state: { updatedTrip: data },
        });
      });
  };

  goToPreviousPage = () => {
    this.props.history.goBack();
  };

  render() {
    const { title, address, price, description, activityType } = this.state;

    return (
      <div className="page-container">
        <Link onClick={this.goToPreviousPage}>
          <img className="icon-small" src="../../images/icon-back.png" alt="" />
        </Link>

        <form className="createActivity-form" onSubmit={this.handleSubmit}>
          <div className="form-container">
            <div className="form-div">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                required
                onChange={this.handleOnChange}
                value={title}
              />
            </div>

            <div className="form-div">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                required
                onChange={this.handleOnChange}
                value={address}
              />
            </div>

            <div className="form-div">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                name="description"
                id="description"
                required
                onChange={this.handleOnChange}
                value={description}
              />
            </div>
            <div className="form-div">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                name="price"
                id="price"
                required
                onChange={this.handleOnChange}
                value={price}
              />
            </div>

            <div className="form-select">
              <label htmlFor="activityType">Type</label>
              <select
                name="activityType"
                id="activityType"
                onChange={this.handleOnChange}
                value={activityType}>
                <option value="Flight">Flight</option>
                <option value="Accomodation">Accomodation</option>
                <option value="Food">Food</option>
                <option value="Cultural">Cultural</option>
                <option value="Nightlife">Nightlife</option>
                <option value="others">others</option>
              </select>
            </div>
            <button className="button-style" onClick={this.goToPreviousPage}>
              <p className="button-text">Add Activity</p>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withAuth(CreateActivity);
