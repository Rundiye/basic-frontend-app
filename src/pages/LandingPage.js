import React from 'react';
import {Link} from 'react-router-dom';


const LandingPage = () => {
  return (
    <div className="page-container">
      
      <h2>My App</h2>
      <button >
        <Link to={'/login'}>
          <p className="button-text">GET STARTED</p>
        </Link>
      </button>
      <p>You don't have an accout yet?
      
            <Link to={'/signup'}> Signup</Link>
      </p>
    </div>
  )
}

export default LandingPage;