import {QUESTION_CHANGE, RESET_POLL_FORM, SET_POLL_ID, SHOW_LINK, SHOW_OPTIONS_FORM} from "./CreatePollActions";


const initialState = {
  question: "Put your question down here.........",
  showOptionsForm: false,
  showModal: false,
};
export default function createPollReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_OPTIONS_FORM:
      return {...state, showOptionsForm: true};
    case SET_POLL_ID:
      return {...state, id: action.id};
    case QUESTION_CHANGE:
      return {...state, question: action.question};
    case SHOW_LINK:
      return {...state, showModal: true};
    case RESET_POLL_FORM:
      return initialState;
    default:
      return state;
  }
}