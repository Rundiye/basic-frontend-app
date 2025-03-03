import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import withAuth from '../components/withAuth';

import activityService from '../services/activity-service';

class EditActivity extends Component {
  state = {
    title: '',
    address: '',
    price: 0,
    activityType: 'Flight',
    activityId: this.props.match.params.activityId,
    tripId: this.props.match.params.tripId,
  };

  componentDidMount() {
    activityService
      .getOneActivity(this.state.activityId)
      .then(response => {
        const { title, address, price, activityType } = response.data;

        this.setState({
          title,
          address,
          price,
          activityType,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    const { title, address, price, activityType, tripId } = this.state;
    event.preventDefault();

    activityService
      .updateOneActivity(this.state.activityId, {
        title,
        address,
        price,
        activityType,
        trip: tripId,
      })

      .then(({ data }) => {
        this.props.history.push({
          pathname: `/trips/${tripId}/dashboard`,
        });
      });
  };

  goToPreviousPage = () => {
    this.props.history.goBack();
  };

  render() {
    const { title, address, price, activityType } = this.state;

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
              <p>Update Activity</p>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withAuth(EditActivity);
