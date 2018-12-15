import {FETCH_ALL_POLLS} from "./ViewAllPollsActions";


export const INITIAL_STATE = {
  polls: [],
};
export const viewAllPollsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case FETCH_ALL_POLLS:
        return {...state, polls: (action.polls || [])};
      default:
        return state;
    }
};