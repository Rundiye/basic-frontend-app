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
      <div className="signup-login-container">
        <Form>
          <div>
            <Field className="form-input" type='text' name='username' placeholder='Insert username'/>
            {this.props.errors.username && this.props.touched.username && <p>{this.props.errors.username}</p>}
            <Field className="form-input" type='password' name='password' placeholder='Password'/>
            {this.props.errors.password && this.props.touched.password && <p>{this.props.errors.password}</p>}
          </div>
          <button type='submit'> Login </button>
        </Form>
        <p>You don't have an accout yet?
          <Link to={'/signup'}> Signup</Link>
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




// function Login({errors, isSubmitting }) {
//   console.log(errors)
//     return (
//       <div className="Signup-form">
//         <Form>
//           <Field type='text' name='username' placeholder='Insert username'/>
//           {errors.password && <p>{errors.password}</p>}
//           <Field type='password' name='password' placeholder='Password'/>
//           <button disabled={isSubmitting && true} type='submit'> submit </button>
//         </Form>
//         <p>You don't have an accout yet?
//           <Link to={'/signup'}> Signup</Link>
//         </p>
//       </div>
//   )
// }

// const LoginWithRouter = withRouter(Login)

// export default withAuth(withFormik({
//   mapPropsToValues({username, password}) {
//     return ({
//       username: username || '',
//       password: password || ''
//     })
//   },
//   validationSchema: Yup.object().shape({
//     username: Yup.string()
//       .required(),
//     password: Yup.string()
//       .min(6)
//       .required()
//   }),
//   handleSubmit(values, {setSubmitting, setErrors, resetForm, props})  {
//     setTimeout(()=>{
//       // console.log(values)
//       if(values.username !== 'username') {
//         setErrors({
//           username: 'insert a valid username'
//         }) 
//       } else {
//         // console.log('ok')
//         resetForm();
//         props.history.push('/home')
//       }
//       setSubmitting(false);
//     },2000)
//   }
//  })(LoginWithRouter));


// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// // import {Redirect} from 'react-router-dom'


// import withAuth from '../components/withAuth'

// class Login extends Component {
//   state = {
//     username: '',
//     password: '',
//   }
  
//   handleFormSubmit = (event) => {
//     event.preventDefault();
//     const { username, password } = this.state

//     this.props.login({ username, password })
//     .then(() => {
//       // this.props.history.push('/home')
//     })
//     .catch( error => console.log(error) )
//   }

//   handleChange = (event) => {  
//     const {name, value} = event.target;
//     this.setState({[name]: value});
//   }

//   render() {
//     const { username, password } = this.state;
//     return (
//       <>
//         <form onSubmit={this.handleFormSubmit}>
//           <label htmlFor='username' >Username:</label>
//           <input id='username' type='text' name='username' value={username} onChange={this.handleChange}/>
//           <label htmlFor='password'>Password:</label>
//           <input id='password' type='password' name='password' value={password} onChange={this.handleChange} />
//           <input type='submit' value='Login' />
//         </form>
//         {/* {redirect ? <Redirect to='/home'/> : null}  */}

//         <p>You don't have an accout yet?
//             <Link to={'/signup'}> Signup</Link>
//         </p>
//       </>
//     )
//   }
// }

// export default withAuth(Login);