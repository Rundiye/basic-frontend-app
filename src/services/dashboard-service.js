import axios from 'axios';

class DashboardService {
  constructor() {
    this.dashboard = axios.create({
      baseURL: 'http://localhost:5000/dashboard',
      withCredentials: true,
    })
  }
  // getAllTrips() {
  //   return this.trip.get('/trips')
  //   .then(response => response)
  // }

  // getSingleTrip(id) {
  //   return this.trip.get(`/apps/${id}`)
  //   .then(response => response)
  // }

  // addOneTrip(newTrip) {
  //   return this.trip.post('/trips/new', newTrip)
  //   .then(response => response)
  // }

  // updateOneTrip(id, updatedTrip) {
  //   return this.trip.put(`/trips/${id}/update`, updatedTrip)
  //   .then(response => response)
  // }

  // deleteOneTrip(id) {
  //   return this.trip.delete(`/trips/${id}/delete`)
  //   .then(response => response)
  // }

  // getAllMyTrips() {
  //   return this.trip.get(`/mytrips`)
  //   .then(response => response)
  // }
}

const dashboardService = new DashboardService();
export default dashboardService;