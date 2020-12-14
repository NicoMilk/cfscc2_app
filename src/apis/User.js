import Api from './Api';

export default {
  postUser(payload) {
    return Api().post('/users/', payload);
  },
  getUsers() {
    return Api().get('/users/');
  },
  getUser(payload) {
    return Api().get('/users/' + payload.userId);
  },
  patchUser(payload) {
    return Api().patch('/users/' + payload.userId, payload.data);
  },
  delUser(payload) {
    return Api().delete('/users/' + payload.userId);
  },
  login(payload) {
    return Api().post('/login/', payload);
  },
  whoAmI() {
    return Api().get('/me/');
  },
  logout() {
    return Api().post('/logout/');
  },
};
