import {resetOptionForm} from "../create_options/CreateOptionAction";
import {HOST_ADDRESS, HOST_PORT} from "../../HostAddress";

const basePath = 'http://' + HOST_ADDRESS + ':' + HOST_PORT;
export const SHOW_OPTIONS_FORM = 'SHOW_OPTIONS_FORM';
export const showOptionsForm = () => (dispatch) => {
  dispatch({
    type: SHOW_OPTIONS_FORM,
  });
};


export const SET_POLL_ID = 'SET_POLL_ID';
export const setPollId = (id) => (dispatch) => {
  dispatch({
    type: SET_POLL_ID,
    id,
  })
};

export const QUESTION_CHANGE = 'QUESTION_CHANGE';
export const onQuestionChange = ({ target }) => (dispatch) => {
  dispatch({
    type: QUESTION_CHANGE,
    question: target.value,
  });
};


export const IP_RESTRICTION = 'ip_restriction';
export const ipRestrictionChange = ({ checked }) => (dispatch) => {
  dispatch({
    type: IP_RESTRICTION,
    ip_restriction: checked,
  });
};

export const SHOW_LINK = 'SHOW_LINK';
export const showLink = () => (dispatch) => {
  dispatch({
    type: SHOW_LINK,
  });
};

export const createPoll = (poll) => (dispatch) => {
  let httpRequest = new XMLHttpRequest();
  httpRequest.responseType = "json";
  httpRequest.open("POST", basePath + '/voting-system/api/v1/polls');
  httpRequest.setRequestHeader("content-type", "application/json");
  httpRequest.onreadystatechange = () => {
    if (httpRequest.status === 201 && httpRequest.readyState === 4)  {
      dispatch(setPollId(httpRequest.response.id));
      dispatch(showOptionsForm());
    }
  };
  httpRequest.send(JSON.stringify(poll));
};

export const createOptions = () => (dispatch, getState) => {
  let httpRequest = new XMLHttpRequest();
  httpRequest.responseType = "json";
  const { createPoll, createOption } = getState();
  const options = createOption.options.filter(option => option.description.trim() !== '');
  httpRequest.open("POST", basePath + '/voting-system/web-api/v1/create-options/');
  httpRequest.setRequestHeader("content-type", "application/json");
  httpRequest.onreadystatechange = () => {
    if (httpRequest.status === 200 && httpRequest.readyState === 4)  {
      dispatch(showLink());
    }
  };
  httpRequest.send(JSON.stringify({ id: createPoll.id, options }));
};


export const RESET_POLL_FORM = 'RESET_POLL_FORM';
export const resetPollForm = () => (dispatch) => {
  dispatch({
    type: RESET_POLL_FORM,
  });
  dispatch(resetOptionForm());
};

