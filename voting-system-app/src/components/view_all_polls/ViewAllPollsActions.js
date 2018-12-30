import {basePath} from "../../HostAddress";

export const FETCH_ALL_POLLS =  'FETCH_ALL_POLLS';
export const fetchAllPolls = () => (dispatch) => {
  let httpRequest = new XMLHttpRequest();
  httpRequest.responseType = "json";
  httpRequest.open("GET", basePath + '/voting-system/api/v1/polls/');
  httpRequest.setRequestHeader("content-type", "application/json");
  httpRequest.onreadystatechange = () => {
    if (httpRequest.status === 200 && httpRequest.readyState === 4)  {
      dispatch({
        type: FETCH_ALL_POLLS,
        polls: httpRequest.response._embedded.polls,
      });
    }
  };
  httpRequest.send();
};

