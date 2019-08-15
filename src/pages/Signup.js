import React from 'react'
import { Link } from 'react-router-dom';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';

import withAuth from '../components/withAuth'

function Signup({errors, isSubmitting}) {
    console.log(errors)
    return (
      <div className="Signup-form">
        <Form>
          <Field type='username' name='username' placeholder='Choose an username'/>
          {errors.email && <p>{errors.email}</p>}
          <Field type='email' name='email' placeholder='Write your email'/>
          {errors.password && <p>{errors.password}</p>}
          <Field type='password' name='password' placeholder='Write your password'/>
          <button disabled={isSubmitting && true} type='submit'> submit </button>
        </Form>
        <p>Already have account? 
          <Link to={'/login'}> Login</Link>
        </p>
      </div>
  )
}

export default withAuth(withFormik({
  mapPropsToValues({username, email, password}) {
    return ({
      username: username || '',
      email: email || '',
      password: password || ''
    })
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('It has to be correct')
      .required(),
    password: Yup.string()
      .min(6)
      .required()
  }),
  handleSubmit(values, {setSubmitting, setErrors, resetForm})  {
    setTimeout(()=>{
      console.log(values)
      if(values.email === '1@1.com') {
        setErrors({
          email: 'email already taken'
        }) 
      } else {
        console.log('ok')
        resetForm()
      }
      setSubmitting(false);
    },2000)
  }
 })(Signup));








// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import {withFormik, Form, Field} from 'formik';
// import * as Yup from 'yup';



// import withAuth from '../components/withAuth'

// class Signup extends Component {

//   state = {
//     username: '',
//     password: '',
//     email: ''
//   };

//   handleFormSubmit = (event) => {
//     event.preventDefault();
//     const username = this.state.username;
//     const password = this.state.password;
//     const email = this.state.email;

//     this.props.signup({ username, password, email })
//       .then( (user) => {
//         console.log(user)
//         this.setState({
//             username: '',
//             password: '',
//             email: '',
//             redirect: true,
//         });
//       })
//       .catch( error => console.log(error) )
//   }

//   handleChange = (event) => {  
//     const {name, value} = event.target;
//     this.setState({[name]: value});
//   }

//   render() {
//     // const { username, password, email } = this.state;
//     console.log(errors)
//     return (
//       <div className="Signup-form">
//         <Form>
//           <Field type='username' name='username' placeholder='Choose an username'/>
//           {errors.email && <p>{errors.email}</p>}
//           <Field type='email' name='email' placeholder='Write your email'/>
//           {errors.password && <p>{errors.password}</p>}
//           <Field type='password' name='password' placeholder='Write your password'/>
//           <button disabled={isSubmitting && true} type='submit'> submit </button>
//         </Form>
//         <p>Already have account? 
//           <Link to={'/login'}> Login</Link>
//         </p>
//       </div>




//     // return (
//     //   <>
//     //     <form onSubmit={this.handleFormSubmit}>
//     //       <label htmlFor='username'>Username:</label>
//     //       <input id='username' type='text' name='username' required value={username} onChange={this.handleChange}/>
//     //       <label htmlFor='email'>Email:</label>
//     //       <input id='email' type='text' name='email' required value={email} onChange={this.handleChange}/>
//     //       <label htmlFor='password'>Password:</label>
//     //       <input id='password' type='password' name='password' required value={password} onChange={this.handleChange} />
//     //       <input type='submit' value='Signup' />
//     //     </form>
      

//     //     <p>Already have account? 
//     //       <Link to={'/login'}> Login</Link>
//     //     </p>

//     //   </>
//     )
//   }
// }

// // export default withAuth(Signup);

// export default withFormik({
//   mapPropsToValues({username, email, password}) {
//     return ({
//       username: username || '',
//       email: email || '',
//       password: password || ''
//     })
//   },
//   validationSchema: Yup.object().shape({
//     username: Yup.string()
//       .username('It has to be correct')
//       .required(),
//     email: Yup.string()
//       .email('It has to be correct')
//       .required(),
//     password: Yup.string()
//       .min(6)
//       .required()
//   }),
//   handleSubmit(values, {setSubmitting, setErrors, resetForm})  {
//     setTimeout(()=>{
//       console.log(values)
//       if(values.email === '1@1.com') {
//         setErrors({
//           email: 'email already taken'
//         })
//       } else {
//         console.log('ok')
//         resetForm()
//       }
//       setSubmitting(false);
//     },2000)
//   }
//  });withAuth(Signup);