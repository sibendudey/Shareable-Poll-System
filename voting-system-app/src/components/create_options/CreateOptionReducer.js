import {OPTION_ADD, OPTION_CLOSE, OPTION_TEXT_CHANGE} from "./CreateOptionAction";


const INITIAL_STATE = {
  numOfOptions: 1,
  options: [
    { description: '' }
  ]
};
export default function createOptionReducer(state = INITIAL_STATE, action)  {
  switch(action.type) {
    case OPTION_TEXT_CHANGE:
      state.options[action.id].description = action.text;
      return {...state};
    case OPTION_CLOSE:
      state.options.splice(action.id, 1);
      return {...state}
    case OPTION_ADD:
      return {...state, options: [...state.options, { description: ''}]}
    default: return state;
  }
}