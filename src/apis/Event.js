import Api from './Api';

export default {
  postEvent(payload) {
    return Api().post('/events/', payload);
  },
  getEvents() {
    return Api().get('/events/');
  },
  getEvent(payload) {
    return Api().get('/events/' + payload.eventId);
  },
  patchEvent(payload) {
    return Api().patch('/events/' + payload.eventId, payload.data);
  },
  delEvent(payload) {
    return Api().delete('/events/' + payload.eventId);
  },
};
