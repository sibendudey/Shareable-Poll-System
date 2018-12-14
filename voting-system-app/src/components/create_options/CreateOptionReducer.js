import {OPTION_ADD, OPTION_CLOSE, OPTION_TEXT_CHANGE, RESET_OPTION_FORM} from "./CreateOptionAction";


const INITIAL_STATE = {
  numOfOptions: 1,
  options: [
    { description: '' }
  ]
};
export default function createOptionReducer(state = INITIAL_STATE, action)  {
  switch(action.type) {
    case OPTION_TEXT_CHANGE:
      let newOptions = [...state.options];
      newOptions[action.id] = {...newOptions[action.id], description: action.text};
      return {...state, options: newOptions};
    case OPTION_CLOSE:
      newOptions = [...state.options];
      newOptions.splice(action.id, 1);
      return {...state, options: newOptions};
    case OPTION_ADD:
      return {...state, options: [...state.options, { description: ''}]};
    case RESET_OPTION_FORM:
      return INITIAL_STATE;
    default: return state;
  }
}