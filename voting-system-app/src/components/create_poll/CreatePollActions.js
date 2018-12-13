

export const SHOW_OPTIONS_FORM = 'SHOW_OPTIONS_FORM';
export const showOptionsForm = () => (dispatch) => {
  dispatch({
    type: SHOW_OPTIONS_FORM,
  });
}


export const SET_POLL_ID = 'SET_POLL_ID';
export const setPollId = (id) => (dispatch) => {
  dispatch({
    type: SET_POLL_ID,
    id,
  })
}


export const QUESTION_CHANGE = 'QUESTION_CHANGE';
export const onQuestionChange = ({ target }) => (dispatch) => {
  dispatch({
    type: QUESTION_CHANGE,
    question: target.value,
  });
};

export const createPoll = (poll) => (dispatch) => {
  let httpRequest = new XMLHttpRequest();
  httpRequest.responseType = "json";
  httpRequest.open("POST", 'http://localhost:8080/voting-system/api/v1/polls');
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
  httpRequest.open("POST", 'http://localhost:8080/voting-system/web-api/v1/create-options/');
  httpRequest.setRequestHeader("content-type", "application/json");
  httpRequest.onreadystatechange = () => {
    if (httpRequest.status === 201 && httpRequest.readyState === 4)  {
      console.log(httpRequest.response);
    }
  };
  httpRequest.send(JSON.stringify({ id: createPoll.id, options: createOption.options }));
};

