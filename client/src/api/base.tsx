// Package
import axios from 'axios';

axios.defaults.withCredentials = true;

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

/* api.interceptors.request.use((request: any) => {
  request.headers.common.Authorization = `Bearer `;
  return request;
});
 */

api.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401 || error.response.status === 403) {
      //   localStorage.removeItem('authToken');
      window.location.href = '/auth/login';
    }
    return Promise.reject(error);
  }
);

export default api;
