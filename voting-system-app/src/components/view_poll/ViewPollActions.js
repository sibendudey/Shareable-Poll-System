import {setPollId, showOptionsForm} from "../create_poll/CreatePollActions";


export const SET_POLL = 'SET_POLL';
export const fetchPoll = (id) => (dispatch) => {
  let httpRequest = new XMLHttpRequest();
  httpRequest.responseType = "json";
  httpRequest.open("GET", 'http://localhost:8080/voting-system/api/v1/polls/1');
  httpRequest.setRequestHeader("content-type", "application/json");
  httpRequest.onreadystatechange = () => {
    if (httpRequest.status === 200 && httpRequest.readyState === 4)  {
      dispatch({
        type: SET_POLL,
        poll: httpRequest.response,
      });
    }
  };
  httpRequest.send();
};