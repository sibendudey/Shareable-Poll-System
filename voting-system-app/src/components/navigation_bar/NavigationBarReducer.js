import {UPDATE_SELECTED} from "./NavigationBarActions";


const INITIAL_STATE = {
  tabs: [
  {
    tabName: 'Home',
    tabUrl: '/',
  },
  {
    tabName: 'Create Poll',
    tabUrl: '/create_poll',
  },
  {
    tabName: 'View Poll',
    tabUrl: '/view_poll',
  }
],
  selectedValue: 'Home',
};

export const navigationBarReducer = (state = INITIAL_STATE, action ) => {
  switch (action.type)  {
    case UPDATE_SELECTED:
      return {...state, selectedValue: action.selectedValue};
    default:
      return state;
  };
};