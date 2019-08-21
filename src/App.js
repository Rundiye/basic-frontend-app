import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

// import Navbar from './components/Navabr.js';
import AuthProvider from './contexts/auth-context';
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';

import LandingPage from './pages/LandingPage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import CreateTrip from './pages/CreateTrip';
import CreateActivity from './pages/CreateActivity';
import Dashboard from './pages/Dashboard';
import EditActivity from './pages/EditActivity';

import './styles/App.css';
import './styles/Activity.css';
import './styles/Dashboard.css';
import './styles/Form.css';
// import 'milligram';

class App extends Component {
  render() {
    return (
      <Router>
        <AuthProvider>
          <div className="container">
            {/* <Navbar /> */}
            <Switch>
              <AnonRoute path="/" exact component={LandingPage} />
              <AnonRoute path="/signup" exact component={Signup} />
              <AnonRoute path="/login" exact component={Login} />
              <PrivateRoute path="/home" exact component={Home} />
              <PrivateRoute path="/profile" exact component={Profile} />
              <PrivateRoute path="/createtrip" exact component={CreateTrip} />
              <PrivateRoute
                path="/trips/:id/dashboard"
                exact
                component={Dashboard}
              />
              <PrivateRoute
                path="/newactivity/:id/:tripId"
                exact
                component={CreateActivity}
              />
              <PrivateRoute
                path="/editactivity/:activityId/:tripId"
                exact
                component={EditActivity}
              />
            </Switch>
          </div>
        </AuthProvider>
      </Router>
    );
  }
}

export default App;
