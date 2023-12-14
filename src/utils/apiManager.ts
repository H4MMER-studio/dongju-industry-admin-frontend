import axios, { AxiosError } from 'axios';

const instance = axios.create({
  baseURL: 'https://api.dongjuind.co.kr/v1',
  timeout: 40000,

  // responseType:"json",
  // headers:{
  //   "Content-Type":"application/json"
  // }
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFTOKEN',
});

const formDataInstance = axios.create({
  baseURL: 'https://api.dongjuind.co.kr/v1',
  timeout: 40000,
  headers: {
    'Content-Type': 'application/form-data',
  },
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFTOKEN',
});

const GET = async (entry: string, payload?: { params?: any }) => {
  if (typeof window !== 'undefined') {
    try {
      const data = await instance({
        method: 'GET',
        url: entry,
        params: payload?.params,
        headers: {
          Authorization: localStorage.getItem('dongju-admin-token')
            ? `${localStorage.getItem('dongju-admin-token')}`
            : '',
        },
      });

      return data.data;
    } catch (error) {
      const err = error as AxiosError;
      const code = err.response?.status;
      if (code === 403 || code === 401) {
        alert('로그인 후 이용해 주세요');
        window.location.href = '/login';
      }
      throw error;
    }
  }
};

const POST = async (
  entry: string,
  payload?: { bodyData: any },
  contentType?: 'form'
) => {
  if (typeof window !== 'undefined') {
    try {
      if (contentType === 'form') {
        const data = await formDataInstance({
          url: entry,
          method: 'POST',
          data: payload?.bodyData,
          headers: {
            Authorization: localStorage.getItem('dongju-admin-token')
              ? `${localStorage.getItem('dongju-admin-token')}`
              : '',
          },
        });
        return data.data;
      } else {
        const data = await instance({
          url: entry,
          method: 'POST',
          data: payload?.bodyData,
          headers: {
            Authorization: localStorage.getItem('dongju-admin-token')
              ? `${localStorage.getItem('dongju-admin-token')}`
              : '',
          },
        });
        return data.data;
      }
    } catch (error) {
      const err = error as AxiosError;
      const code = err.response?.status;
      if (code === 403 || code === 401) {
        alert('로그인 후 이용해 주세요');
        window.location.href = '/login';
      }
      throw error;
    }
  }
};

const DELETE = async (
  entry: string,
  payload?: { params?: any; bodyData?: any }
) => {
  if (typeof window !== 'undefined') {
    try {
      const res = await instance({
        url: entry,
        method: 'DELETE',
        params: payload?.params,
        data: payload?.bodyData,
        headers: {
          Authorization: localStorage.getItem('dongju-admin-token')
            ? `${localStorage.getItem('dongju-admin-token')}`
            : '',
        },
      });
      return res;
    } catch (error) {
      const err = error as AxiosError;
      const code = err.response?.status;
      if (code === 403 || code === 401) {
        alert('로그인 후 이용해 주세요');
        window.location.href = '/login';
      }
      throw error;
    }
  }
};

const PATCH = async (
  entry: string,
  { bodyData }: { bodyData: any },
  contentType?: 'form'
) => {
  if (typeof window !== 'undefined') {
    try {
      if (contentType === 'form') {
        const data = await formDataInstance({
          url: entry,
          method: 'PATCH',
          data: bodyData,
          headers: {
            Authorization: localStorage.getItem('dongju-admin-token')
              ? `${localStorage.getItem('dongju-admin-token')}`
              : '',
          },
        });
        return data.data;
      } else {
        const res = await instance({
          url: entry,
          method: 'PATCH',
          data: bodyData,
          headers: {
            Authorization: localStorage.getItem('dongju-admin-token')
              ? `${localStorage.getItem('dongju-admin-token')}`
              : '',
          },
        });
        return res;
      }
    } catch (error) {
      const err = error as AxiosError;
      const code = err.response?.status;
      if (code === 403 || code === 401) {
        alert('로그인 후 이용해 주세요');
        window.location.href = '/login';
      }
      throw error;
    }
  }
};

export const API = { GET, POST, DELETE, PATCH };
