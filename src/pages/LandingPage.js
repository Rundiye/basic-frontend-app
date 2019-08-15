import React from 'react';
import {Link} from 'react-router-dom';


const LandingPage = () => {
  return (
    <div>
      <h2>My App</h2>
      <Link to={'/login'}>
        <p>GET STARTED</p>
      </Link>
      <p>You don't have an accout yet?
            <Link to={'/signup'}> Signup</Link>
      </p>
    </div>
  )
}

export default LandingPage;