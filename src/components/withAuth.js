import React, {Component} from 'react'
import {AuthContext} from '../contexts/auth-context'

const withAuth = (Comp) => {
  return class WithAuth extends Component {
    render() {
      return (
        <AuthContext.Consumer>
          {/* the ones below are = value  */}
          {({user, isLoggedIn, login, signup, logout, me}) => (
            <Comp 
            user={user}
            isLoggedIn={isLoggedIn}
            login={login}
            signup={signup}
            logout={logout}
            me = {me}
            {...this.props}
            />
          )}
        </AuthContext.Consumer>
      )
    }
  }
}


export default withAuth;