import {SHOW_OPTIONS_FORM} from "./CreatePollActions";


const initialState = { question: "Put your question down here.........",
showOptionsForm: false};
export default function createPollReducer(state = initialState, action)   {
    switch (action.type) {
        case SHOW_OPTIONS_FORM:
            return {...state, showOptionsForm: true};
        default:
            return initialState;
    }
}