import axios from 'axios';

let baseApi = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
});

let Api = () => {
  return baseApi;
};

export default Api;
