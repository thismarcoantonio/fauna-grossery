export const SUBMIT_FORM = '[auth] SUBMIT_FORM'
export const SUCCESS_FORM = '[auth] SUCCESS_FORM'
export const ERROR_FORM = '[auth] ERROR_FORM'

export const submitForm = payload => ({ type: SUBMIT_FORM, payload })
export const successForm = () => ({ type: SUCCESS_FORM })
export const errorForm = () => ({ type: ERROR_FORM })
