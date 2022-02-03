import axios from 'axios';
import { BASE_URL } from './index';
import { toast } from 'react-toastify';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.response.use(undefined, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    toast.error('A unexpected error occurred');
  }
  return Promise.reject(error);
});

export default axiosInstance;
