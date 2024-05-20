import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

import { HOST_API } from '../config-global';

// ----------------------------------------------------------------------

const axiosInstance: AxiosInstance = axios.create({ baseURL: HOST_API });

axiosInstance.interceptors.response.use(
  (res: AxiosResponse) => res,
  (error: AxiosError) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;

// ----------------------------------------------------------------------

export const fetcher = async (args: string | [string, any]): Promise<any> => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res: AxiosResponse = await axiosInstance.get(url, { ...config });

  return res.data;
};

// ----------------------------------------------------------------------

export const endpoints = {
  auth: {
    me: '/api/auth/me',
    login: '/api/Users/login',
    register: '/api/auth/register',
  },
  categories:{
    list: '/api/auth/me',
    new:'/api/auth/me',
    edit:'/api/auth/me',
    delete:'/api/auth/me',
  }
};
