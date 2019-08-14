import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom'

import auth from '../services/auth-service';
import withAuth from './withAuth'

class Login extends Component {
  state = {
    username: '',
    password: '',
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state

    auth.login({ username, password })
    .then( (user) => {
      console.log(user)
      this.setState({
        redirect: true,
      })
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { username, password, redirect } = this.state;
    return (
      <>
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor='username' >Username:</label>
          <input id='username' type='text' name='username' value={username} onChange={this.handleChange}/>
          <label htmlFor='password'>Password:</label>
          <input id='password' type='password' name='password' value={password} onChange={this.handleChange} />
          <input type='submit' value='Login' />
        </form>
        {redirect ? <Redirect to='/home'/> : null}

        <p>You don't have an accout yet?
            <Link to={'/signup'}> Signup</Link>
        </p>
      </>
    )
  }
}

export default withAuth(Login);