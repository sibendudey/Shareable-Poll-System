import {SET_POLL, SET_POLL_PERCENTAGE} from "./ViewPollActions";


export const INITIAL_STATE = {
  isLoading: true,
  poll: {
    question: '',
    options: [],
  }
};

export default function viewPollReducer(state = INITIAL_STATE, action)  {
  switch(action.type) {
    case SET_POLL:
      return {...state, poll: action.poll, isLoading: false};
    case SET_POLL_PERCENTAGE:
      return {...state, poll: {...state.poll, percentage: action.percentage}};
    default: return state;
  }
}