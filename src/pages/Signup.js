import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom'

import auth from '../services/auth-service';

class Signup extends Component {

  state = {
    username: '',
    password: '',
    email: ''
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const email = this.state.password;

    auth.signup({ username, password, email })
      .then( (user) => {
        console.log(user)
        this.setState({
            username: '',
            password: '',
            email: '',
            redirect: true,
        });
      })
      .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { username, password, email, redirect } = this.state;
    return (
      <>
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor='username'>Username:</label>
          <input id='username' type='text' name='username' required value={username} onChange={this.handleChange}/>
          <label htmlFor='email'>Email:</label>
          <input id='email' type='text' name='email' required value={email} onChange={this.handleChange}/>
          <label htmlFor='password'>Password:</label>
          <input id='password' type='password' name='password' required value={password} onChange={this.handleChange} />
          <input type='submit' value='Signup' />
        </form>
        {redirect ? <Redirect to='/home'/> : null}

        <p>Already have account? 
          <Link to={'/login'}> Login</Link>
        </p>

      </>
    )
  }
}

export default Signup;