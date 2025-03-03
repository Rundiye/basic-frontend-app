import axios from 'axios';

class TripService {
  constructor() {
    this.trip = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_DOMAIN + '/trip',
      withCredentials: true,
    })
  }
  getAllTrips() {
    return this.trip.get('/trips')
    .then(response => response)
  }

  getSingleTrip(id) {
    return this.trip.get(`/trips/${id}`)
    .then(response => {console.log(response); return response})
  }

  addOneTrip(newTrip) {
    return this.trip.post('/trips/new', newTrip)
    .then(response => response)
  }

  updateOneTrip(id, updatedTrip) {
    return this.trip.put(`/trips/${id}/update`, updatedTrip)
    .then(response => response)
  }

  deleteOneTrip(id) {
    return this.trip.delete(`/trips/${id}/delete`)
    .then(response => response)
  }

  getAllMyTrips() {
    return this.trip.get(`/mytrips`)
    .then(response => response)
  }

  getTripDashboard(id) {
    return this.trip.get(`/mytrips/${id}/dashboard`)
  }
}

const tripService = new TripService();
export default tripService;