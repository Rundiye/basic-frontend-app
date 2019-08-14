import React, {Component} from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';

// import Navbar from './components/Navabr.js';
import AuthProvider from './contexts/auth-context'
import PrivateRoute from './components/PrivateRoute'
import AnonRoute from './components/AnonRoute'

import LandingPage from './pages/LandingPage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';

import './App.css';
import 'milligram';

class App extends Component {
  render() {
    return (
      <Router>
        <AuthProvider>
          <div className="container">
            {/* <Navbar /> */}
            <Switch>
              <AnonRoute path='/' exact component={LandingPage}/>
              <AnonRoute path="/signup" component={Signup} />
              <AnonRoute path="/login" component={Login} />
              <PrivateRoute path="/home" component={Home} />
              <PrivateRoute path="/profile" component={Profile} />
            </Switch>
          </div>
        </AuthProvider>
      </Router>
    )
  }
}

export default App;
