import {HOST_ADDRESS, HOST_PORT} from "../../HostAddress";

const basePath = 'http://' + HOST_ADDRESS + ':' + HOST_PORT;
export const SET_POLL = 'SET_POLL';
export const fetchPoll = (id) => (dispatch) => {
  let httpRequest = new XMLHttpRequest();
  httpRequest.responseType = "json";
  httpRequest.open("GET", basePath + '/voting-system/api/v1/polls/' + id);
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



export const SET_POLL_PERCENTAGE = 'SET_POLL_PERCENTAGE';
export const vote = (id) => (dispatch) => {
  let httpRequest = new XMLHttpRequest();
  httpRequest.responseType = "json";
  httpRequest.open("GET", basePath + '/voting-system/web-api/v1/vote/' + id);
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

export const SET_POLL_UPDATE_SUBSCRIBE = 'SET_POLL_UPDATE_SUBSCRIBE';
export const subscribeToPoll = (id, client) => (dispatch) => {
    const subscription = client.subscribe('/polls/update_poll/' + id, function (resp) {
      dispatch({
        type: SET_POLL,
        poll: JSON.parse(resp.body),
      });
    });
    
    dispatch({
      type: SET_POLL_UPDATE_SUBSCRIBE,
      subscription,
    });
};

export const RESET_POLL = 'RESET_POLL';

export const resetPoll = (subscription) => (dispatch) => {
  subscription.unsubscribe();
  dispatch({
    type: RESET_POLL,
  });
};