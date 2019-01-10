import {REGISTRATION_SUCCESS, RESET_REGISTER_FORM, UPDATE_REGISTER_FORM} from "./RegisterFormActions";

const INITIAL_STATE = {
  regSuccess: false,
  regError: false,
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

export const registrationFormReducer = (state = INITIAL_STATE, action) => {
  switch (action.type)  {
    case UPDATE_REGISTER_FORM:
      return {...state, ...action.registrationData};
    case REGISTRATION_SUCCESS:
      return {...state, regSuccess: true};
    case RESET_REGISTER_FORM:
      return INITIAL_STATE;
    default:
      return state;
  }
};