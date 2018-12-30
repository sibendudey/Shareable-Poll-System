
export const SET_SOCKET_CLIENT = 'SET_SOCKET_CLIENT';
export const setWebSocketClient = (client) => (dispatch) => {
  dispatch({
    type: SET_SOCKET_CLIENT,
    client,
  });
};