import { GET_TOKEN } from '../actions/router';

const defaultState = {
  loading: true,
  loaded: false,
  token: ''
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case GET_TOKEN:
      return {
        ...state,
        loading: false,
        loaded: true,
        token: action.token || state.token
      };
    default:
      return state;
  }
};
