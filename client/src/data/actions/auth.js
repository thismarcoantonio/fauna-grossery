import { postUser } from '../services/auth';

export const SUBMIT_FORM = '[auth] SUBMIT_FORM';
export const SUCCESS_FORM = '[auth] SUCCESS_FORM';
export const ERROR_FORM = '[auth] ERROR_FORM';

const submitForm = () => ({ type: SUBMIT_FORM });
const successForm = payload => ({ type: SUCCESS_FORM, payload });
const errorForm = error => ({ type: ERROR_FORM, error });

export const registerUser = (data = {}) => (dispatch) => {
  console.log(data);

  dispatch(submitForm());

  return postUser(data)
    .then(response => dispatch(successForm(response)))
    .then(error => dispatch(errorForm(error)));
};
