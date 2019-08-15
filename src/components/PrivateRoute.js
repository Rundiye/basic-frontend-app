import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import withAuth from './withAuth'

const PrivateRoute = (props) => {
  const {isLoggedIn, component: Component, ...rest} = props;
  return (
    <>
      {isLoggedIn ? <Route render={(props) => {
        return <Component {...props}/> 
        //  para q react entienda que es un componente, se escribe en mayuscula
      }}
      {...rest}
      /> : <Redirect to='/login' />}
    </>
    
  )
}

export default withAuth(PrivateRoute);