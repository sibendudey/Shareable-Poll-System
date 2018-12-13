import {SET_POLL} from "./ViewPollActions";


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
    default: return state;
  }
}