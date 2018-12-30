import {RESET_POLL, SET_POLL, SET_POLL_PERCENTAGE, SET_POLL_UPDATE_SUBSCRIBE} from "./ViewPollActions";


export const INITIAL_STATE = {
  isLoading: true,
  poll: {
    question: '',
    pollOptions: [],
  },
  pollUpdateSubscribed: false,
};

export default function viewPollReducer(state = INITIAL_STATE, action)  {
  switch(action.type) {
    case SET_POLL:
      return {...state, poll: action.poll, isLoading: false};
    case SET_POLL_PERCENTAGE:
      return {...state, poll: {...state.poll, percentage: action.percentage}};
    case SET_POLL_UPDATE_SUBSCRIBE:
      return {...state, pollUpdateSubscribed: true, subscription: action.subscription};
    case RESET_POLL:
      return INITIAL_STATE;
    default: return state;
  }
}