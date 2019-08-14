import React from 'react'
import withAuth from './withAuth'

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
    </div>
  )
}

export default withAuth(Home);