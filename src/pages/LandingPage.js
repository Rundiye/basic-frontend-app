import React from 'react';
import {Link} from 'react-router-dom';


const LandingPage = () => {
  return (
    <div className="signup-login-container landing-image">
      <div className="landing-info">
        <div className="app-title-box">
          <h2 className="app-title">Meraki</h2>
        </div>
        <div className="get-started">
          <Link className="link" to={'/login'}>
            <h3 className="letter-spacing">GET STARTED</h3>
          </Link>
        </div>
        <p className="signup-p">You don't have an accout yet?
          <Link className="link" to={'/signup'}> Signup</Link>
        </p>
      </div>
    </div>
  )
}

export default LandingPage;