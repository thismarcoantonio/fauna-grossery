import axios from './api';

export const postUser = (data) => {
  return axios
    .post('/users', { ...data, username: 'empty' });
};
