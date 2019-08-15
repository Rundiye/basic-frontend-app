import React, { Component } from 'react'
import withAuth from '../components/withAuth'
import Navbar from '../components/Navbar';

class Home extends Component {

  render(props) {
    console.log(this.props.user)
    return (
      <div>
        <Navbar />
      </div>
    )
  }
}

export default withAuth(Home)