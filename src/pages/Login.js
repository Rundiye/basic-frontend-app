import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';

import withAuth from '../components/withAuth'


class Login extends Component {
  state = {
    username: '',
    password: '',
  }
  
  render() {
    return (
      <div className="signup-login-container landing-image">
          <Form className="login-form">
              <Field className="form-input" type='text' name='username' placeholder='Insert username'/>
              {this.props.errors.username && this.props.touched.username && <p className="errors">{this.props.errors.username}</p>}
              <Field className="form-input" type='password' name='password' placeholder='Password'/>
              {this.props.errors.password && this.props.touched.password && <p className="errors">{this.props.errors.password}</p>}
            <button className="button-style" type='submit'> Login </button>
          </Form>
          <p className="signup-p">You don't have an accout yet?
            <Link className="link" to={'/signup'}> Signup</Link>
          </p>
      </div>
    )
  }
}

const LoginWithRouter = withRouter(Login)

export default withAuth(withFormik({
  mapPropsToValues({username, password}) {
    return ({
      username: username || '',
      password: password || ''
    })
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string()
      .min(6)
      .required()
  }),
  handleSubmit(values, inputs) {
    const username = values.username;
    const password = values.password;

    inputs.props.login({username, password})
  }
  
 })(LoginWithRouter));
