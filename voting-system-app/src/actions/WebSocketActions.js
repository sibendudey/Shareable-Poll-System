import SockJS from "sockjs-client";
import {Stomp} from "stompjs/lib/stomp";
import {basePath} from "../HostAddress";


export const SET_SOCKET_CLIENT = 'SET_SOCKET_CLIENT';
export const setWebSocketClient = (client) => (dispatch) => {
  dispatch({
    type: SET_SOCKET_CLIENT,
    client,
  });
};


export const connectToWebSocket = () => (dispatch) => {
  // Configure the client, this only needs to be done once.
  const socket = new SockJS( basePath + '/pollsocket');
  let stompClient = Stomp.over(socket);
  stompClient.connect({}, function (frame) {
    dispatch(setWebSocketClient(stompClient));
  });
};