import SockJS from "sockjs-client";
import {Stomp} from "stompjs/lib/stomp";
import $ from 'jquery';
import swal from 'sweetalert';
import {basePath} from "../../HostAddress";
export const registration = (form) => (dispatch, getState) => {
  const form = getState().register;
  $.ajax({
    url: basePath + "/voting-system/api/v1/basicUsers",
    type: "POST",
    contentType: "application/json",
    dataType: "json",
    data: JSON.stringify(form),
    success: function (resp) {
      localStorage.setItem("email", form.email);
      swal("Your profile has been created. The website is constantly being enhanced. Please checkout for " +
        "new enhancements associated with your profile");
      dispatch(resetRegistrationForm())
    },
    error: function (err) {
      swal(err);
    }
  });
};

export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const success = () => (dispatch) => {
  dispatch({
    type: REGISTRATION_SUCCESS,
  });
};

export const REGISTRATION_ERROR = 'REGISTRATION_SUCCESS';
export const error = () => (dispatch) => {
  dispatch({
    type: REGISTRATION_ERROR,
  });
};

export const UPDATE_REGISTER_FORM = 'UPDATE_REGISTER_FORM';

export const updateRegisterForm = (data) => (dispatch) => {
  dispatch({
    type: 'UPDATE_REGISTER_FORM',
    registrationData: data,
  });
};

export const RESET_REGISTER_FORM = 'RESET_REGISTER_FORM';
export const resetRegistrationForm = () => (dispatch) => {
  dispatch({
    type: RESET_REGISTER_FORM,
  });
};


