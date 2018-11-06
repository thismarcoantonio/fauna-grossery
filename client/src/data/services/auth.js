import axios from './api';

export const postUser = (data) => {
  return axios.post('/users', data);
};

export const authUser = (data = {}) => {
  if ((!data.email || !data.username) && !data.password) throw Error('Fill your user data and try again!');

  return axios
    .post('/authenticate', data);
};
