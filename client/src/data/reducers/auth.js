import { SUBMIT_FORM, ERROR_FORM, SUCCESS_FORM } from '../actions/auth'

const defaultState = {
  loading: false,
  loaded: false,
  error: null,
  success: null
}

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case SUBMIT_FORM:
      return {
        ...state,
        loading: true,
        loaded: false
      }
    case ERROR_FORM:
      return {
        ...state,
        loaded: true,
        loading: false,
        error: action.error
      }
    case SUCCESS_FORM:
      return {
        ...state,
        loaded: true,
        loading: false,
        success: true
      }
    default:
      return state
  }
}
