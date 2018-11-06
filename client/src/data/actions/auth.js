import { postUser, authUser } from '../services/auth';

export const SUBMIT_FORM = '[auth] SUBMIT_FORM';
export const SUCCESS_FORM = '[auth] SUCCESS_FORM';
export const ERROR_FORM = '[auth] ERROR_FORM';

const submitForm = () => ({ type: SUBMIT_FORM });
const successForm = token => ({ type: SUCCESS_FORM, token });
const errorForm = error => ({ type: ERROR_FORM, error });

const getToken = (data, dispatch) => {
  return authUser({ username: data.username, email: data.email, password: data.password })
    .then(({ data }) => dispatch(successForm(data.token)))
    .catch(error => dispatch(errorForm(error)));
};

export const registerUser = (data = {}) => (dispatch) => {
  dispatch(submitForm());

  return postUser(data)
    .then(response => getToken(response.data, dispatch))
    .catch(error => dispatch(errorForm(error)));
};

