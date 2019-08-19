import React, { Component } from 'react'
// import Activity from './Activity'
// import tripService from '../services/trip-service'


class Day extends Component {
  // state = {
  //   totalDays: [],
  // }

  // componentDidMount() {
  //   tripService.getAllDays()
  //   .then((response)=> {
  //     this.setState({
  //       totalDays: response.data.totalDays,
  //       })
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // }
  
  render() {
    return (
      <div>
         {/* <section>
      {totalDays.length > 0 ? totalDays.map((day) => {
                      return (
                        <div>
                          <h2>{totaday.day}</h2>
                          <p>{day.activities}</p>
              
                        </div>
                      )
                    }): <p>No days</p> }
      </section> */}
      </div>
      // <div>
      //    {trip.totalDays.length > 0 ? trip.totalDays.map((day) => {
      //       return (
      //         <article key={day._id}>
      //             <h2>{day.day}</h2>
      //           <div className="trip-container">
                 
      //             <button>
      //             <Link to='/trips/:id/dashboard'>Go to Dashboard</Link>
      //             </button>
      //           </div>
      //         </article>
      //       )
      //     }) : <p>You have no trips created</p>}
      // </div>
    )
  }
}

export default Day; 