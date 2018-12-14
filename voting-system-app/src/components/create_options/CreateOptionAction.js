
export const OPTION_TEXT_CHANGE = 'OPTION_TEXT_CHANGE';
export const onOptionTextChange = (text, id) => (dispatch) => {
  dispatch({
    type: OPTION_TEXT_CHANGE,
    text,
    id,
  });
};

export const OPTION_CLOSE = 'OPTION_CLOSE';
export const onOptionClose = (id) => (dispatch) => {
  dispatch({
    type: OPTION_CLOSE,
    id,
  })
};

export const RESET_OPTION_FORM = 'RESET_OPTION_FORM';
export const resetOptionForm = () => (dispatch) => {
  dispatch({
    type: RESET_OPTION_FORM,
  });
};


export const OPTION_ADD = 'OPTION_ADD';
export const onOptionAdd = () => (dispatch) => {
  dispatch({
    type: OPTION_ADD,
  })
};