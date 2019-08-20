
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import withAuth from '../components/withAuth'


class Signup extends Component {
  state = {
    username: '',
    password: '',
    email: ''
  };
    
  render() {
    return (
      <div className="signup-login-container">
        <Form className="signup-login-form">
          <div>
            <Field className="form-input" type='text' name='username' placeholder='Choose an username'/>
            {this.props.errors.username && this.props.touched.username && <p>{this.props.errors.username}</p>}
          
            <Field className="form-input" type='text' name='email' placeholder='Write your email'/>
            {this.props.errors.email && this.props.touched.email && <p>{this.props.errors.email}</p>}
         
            <Field className="form-input" type='password' name='password' placeholder='Write your password'/>
            {this.props.errors.password && this.props.touched.password && <p>{this.props.errors.password}</p>}
          </div>
          
          <button  type='submit'> Sign Up </button>
        </Form>
        <p>Already have account? 
          <Link to={'/login'}> Login</Link>
        </p>
      </div>
    )
  }
}

// disabled={isSubmitting && true}

const SignupWithRouter = withRouter(Signup)

export default withAuth(withFormik({
  mapPropsToValues({username, email, password}) {
    return ({
      username: username || '',
      email: email || '',
      password: password || ''
    })
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    email: Yup.string()
      .email('It has to be correct')
      .required(),
    password: Yup.string()
      .min(6)
      .required()
  }),
  handleSubmit(values, inputs) {
    const username = values.username;
    const password = values.password;
    const email = values.email;

    inputs.props.signup({username, password, email})
  }
  
 })(SignupWithRouter));



