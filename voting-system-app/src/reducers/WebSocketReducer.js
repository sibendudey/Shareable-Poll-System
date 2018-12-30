import {SET_SOCKET_CLIENT} from "../actions/WebSocketActions";

export const webSocketReducer = (state = {}, action) => {
  switch(action.type) {
    case SET_SOCKET_CLIENT:
      return {...state, client: action.client};
    default:
      return state;
  }
};


export default webSocketReducer;