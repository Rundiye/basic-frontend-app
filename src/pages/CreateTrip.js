import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

import withAuth from '../components/withAuth'
import tripService from '../services/trip-service'

class CreateTrip extends Component {
  state = {
    title: '',
    destination: '',
    startDate: null,
    endDate: null,
    description: '',
    budget: 0,
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
    tripService.addOneTrip({
      title, 
      destination, 
      startDate, 
      endDate, 
      description, 
      budget,
    })
    .then(response => {
      this.setState({
        redirect: true,
      })
    })
    .catch(error => console.log(error))
  }



  render() {
    const {title, destination, startDate, endDate, description, budget, redirect} = this.state;
    console.log(this.state)
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" required onChange={this.handleOnChange} value={title}/>

          <label htmlFor="destination">Destination</label>
          <input type="text" name="destination" id="destination" required onChange={this.handleOnChange} value={destination}/>

          <label htmlFor="startDate">Start Date</label>
          <input type="date" name="startDate" id="startDate" required onChange={this.handleOnChange} value={startDate}/>

          <label htmlFor="endDate">End Date</label>
          <input type="date" name="endDate" id="endDate" required onChange={this.handleOnChange} value={endDate}/>

          <label htmlFor="description">Description</label>
          <input type="text" name="description" id="description" onChange={this.handleOnChange} value={description}/>

          <label htmlFor="budget">Budget</label>
          <input type="number" name="budget" id="budget" required onChange={this.handleOnChange} value={budget}/>
          
          <button type="submit">Add new Trip</button>
        </form>
      
        {redirect ? <Redirect to='/home'/> : null}

      </>
    )
  }
}

export default withAuth(CreateTrip);














// import React, { Component } from 'react'
// import {withFormik, Form, Field} from 'formik';
// import * as Yup from 'yup';

// import withAuth from '../components/withAuth'
// import tripService from '../services/trip-service'

// class CreateTrip extends Component {
//   state = {
//     title: '',
//     destination: '',
//     startDate: '',
//     endDate: '',
//     description: '',
//     budget: 0,
//   }
//   render() {
//     return (
//       <div className="trip-form">
//         <Form>
//           <Field type='text' name='title' placeholder='5 days in Hawaii'/>
//           {/* {this.props.errors.username && this.props.touched.username && <p>{this.props.errors.username}</p>} */}
//           <Field type='text' name='destination'  placeholder='Hawaii'/>
//           {/* {this.props.errors.password && this.props.touched.password && <p>{this.props.errors.password}</p>} */}
//           <Field type='date' name='startDate'/>
//           <Field type='date' name='endDate'/>
//           <Field type='text' name='description' placeholder='chill trip with friends'/>
//           <Field type='number' name='budget' placeholder='700'/>
//           <button type='submit'> Create a Trip! </button>
//         </Form>
//       </div>
//     )
//   }
// }

// export default withAuth(withFormik({
//   mapPropsToValues({title, destination, startDate, endDate, description, budget}) {
//     return ({
//       title: title || '',
//       destination: destination || '',
//       startDate: startDate || '',
//       endDate: endDate || '',
//       description: description || '',
//       budget: budget || 0,
//     })
//   },
//   validationSchema: Yup.object().shape({
//     title: Yup.string().required(),
//     destination: Yup.string().required(),
//     startDate: Yup.string().required(),
//     endDate: Yup.string().required(),
//     budget: Yup.string().required(),

//   }),
//   handleSubmit  (event) {
//     const {title, destination, startDate, endDate, description, budget} = this.state;
//     event.preventDefault();
//     tripService.addOneTrip({
//       title, 
//       destination, 
//       startDate, 
//       endDate, 
//       description, 
//       budget,
//     })
//     .then(() => {
//       this.setState({
//         // redirect: true,
//       })
//     })
//     .catch(error => console.log(error))
//   }
//     // const title = values.title;
//     // const destination = values.destination;
//     // const startDate = values.startDate;
//     // const endDate = values.endDate;
//     // const description = values.description;
//     // const budget = values.budget;

//     // inputs.props.trips.new({title, destination, startDate, endDate, description, budget})
  
  
//  }(CreateTrip)));
