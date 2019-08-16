
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
      <div className="Signup-form">
        <Form>
          <Field className="form-input" type='text' name='username' placeholder='Choose an username'/>
          {this.props.errors.username && this.props.touched.username && <p>{this.props.errors.username}</p>}
          <Field className="form-input" type='text' name='email' placeholder='Write your email'/>
          {this.props.errors.email && this.props.touched.email && <p>{this.props.errors.email}</p>}
          <Field className="form-input" type='password' name='password' placeholder='Write your password'/>
          {this.props.errors.password && this.props.touched.password && <p>{this.props.errors.password}</p>}
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




//  handleSubmit(values, {setSubmitting, setErrors, resetForm, props})  {
//   setTimeout(()=>{
//     // console.log(values)
//     if(values.email === '1@1.com') {
//       setErrors({
//         email: 'email already taken'
//       }) 
//     } else {
//       // console.log('ok')
//       resetForm();
//       props.history.push('/home')
//     }
//     setSubmitting(false);
//   },2000)
// }

// function Signup({errors, touched, isSubmitting }) {
//     return (
//       <div className="Signup-form">
//         <Form>
//           <Field type='text' name='username' placeholder='Choose an username'/>
//           {errors.username && touched.username && <p>{errors.username}</p>}
//           <Field type='text' name='email' placeholder='Write your email'/>
//           {errors.email && touched.email && <p>{errors.email}</p>}
//           <Field type='password' name='password' placeholder='Write your password'/>
//           {errors.password && touched.password && <p>{errors.password}</p>}
//           <button disabled={isSubmitting && true} type='submit'> submit </button>
//         </Form>
//         <p>Already have account? 
//           <Link to={'/login'}> Login</Link>
//         </p>
//       </div>
//   )
// }

// const SignupWithRouter = withRouter(Signup)

// export default withAuth(withFormik({
//   mapPropsToValues({username, email, password}) {
//     return ({
//       username: username || '',
//       email: email || '',
//       password: password || ''
//     })
//   },
//   validationSchema: Yup.object().shape({
//     username: Yup.string().required(),
//     email: Yup.string()
//       .email('It has to be correct')
//       .required(),
//     password: Yup.string()
//       .min(6)
//       .required()
//   }),
//   handleSubmit(values, {setSubmitting, setErrors, resetForm, props})  {
//     setTimeout(()=>{
//       // console.log(values)
//       if(values.email === '1@1.com') {
//         setErrors({
//           email: 'email already taken'
//         }) 
//       } else {
//         // console.log('ok')
//         resetForm();
//         props.history.push('/home')
//       }
//       setSubmitting(false);
//     },2000)
//   }
//  })(SignupWithRouter));








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