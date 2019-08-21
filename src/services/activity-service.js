import axios from 'axios';

class ActivityService {
  constructor() {
    this.activity = axios.create({
      baseURL: 'http://localhost:5000/activity',
      withCredentials: true,
    })
  }
  getAllActivities() {
    return this.activity.get('/activities')
    .then(response => response)
  }

  addOneActivity(dayId, newActivity) {
    return this.activity.post(`/activities/new/${dayId}`, newActivity)
    .then(response => {
      // console.log(response.data);
      return response;
    })
  }

  updateOneActivity(id, updatedActivity) {
    return this.activity.put(`/activities/${id}/update`, updatedActivity)
    .then(response => response)
  }

  deleteOneActivity(id) {
    return this.activity.delete(`/activities/${id}/delete`)
    .then(response => response)
  }

  // getAllMyActivities() {
  //   return this.activity.get(`/myactivities`)
  //   .then(response => response)
  // }
}

const activityService = new ActivityService();
export default activityService;