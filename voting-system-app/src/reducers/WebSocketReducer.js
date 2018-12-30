import {SET_SOCKET_CLIENT} from "../actions/WebSocketActions";

export const webSocketReducer = (state = { connected: false }, action) => {
  switch(action.type) {
    case SET_SOCKET_CLIENT:
      return {...state, client: action.client, connected: true};
    default:
      return state;
  }
};


export default webSocketReducer;