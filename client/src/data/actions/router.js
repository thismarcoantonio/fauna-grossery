export const GET_TOKEN = '[auth] GET_token';
export const getToken = () => ({ type: GET_TOKEN, token: localStorage.getItem('token') });
