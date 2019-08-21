import React from 'react';
import {Link} from 'react-router-dom';


const LandingPage = () => {
  return (
    <div className="page-container signup-login-container ">
      
      <h2 className="app-title">Meraki App</h2>
      <div>
        <Link to={'/login'}>
          <p>GET STARTED</p>
        </Link>
      </div>
      <p>You don't have an accout yet?
      
            <Link to={'/signup'}> Signup</Link>
      </p>
    </div>
  )
}

export default LandingPage;