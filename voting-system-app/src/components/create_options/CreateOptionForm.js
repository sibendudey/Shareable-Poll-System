import React from 'react';
import {Icon} from "carbon-components-react";
import { TextField, Button as MaterialButton} from "@material-ui/core";
import { connect } from 'react-redux';
import './createOptionForm.scss';
import {onOptionAdd, onOptionClose, onOptionTextChange} from "./CreateOptionAction";

class CreateOptionForm extends React.Component{
    constructor(props)  {
      super(props);
      this.onOptionTextChange = this.onOptionTextChange.bind(this);
    }

    onOptionTextChange(ev, index)  {
        const { dispatchOnOptionTextChange } = this.props;
        const text = ev.target.value;
        dispatchOnOptionTextChange(text, index);
    }

    render()  {
      const { options } = this.props.createOption;
      const { dispatchOnOptionClose, dispatchOnOptionAdd } = this.props;
      return (<React.Fragment>
        { options.map((option, i) =>
          (<div className="option-box">
            <TextField helperText='Put your option here' className="option-text" id={'' + i} value={option.description} onChange={(ev) => this.onOptionTextChange(ev, i)}/>
            <Icon className='option-close' name='icon--close--outline' onClick={() => dispatchOnOptionClose(i)}/>
            </div>)) }
            <div className="add-option-button">
              <MaterialButton variant="contained" className="add-option-button" onClick={dispatchOnOptionAdd}>Add Option</MaterialButton>
            </div>
      </React.Fragment>);
    }
}


const mapDispatchToProps = (dispatch) => ({
  dispatchOnOptionTextChange: (text, index) => dispatch(onOptionTextChange(text, index)),
  dispatchOnOptionClose: (index) => dispatch(onOptionClose(index)),
  dispatchOnOptionAdd: () => dispatch(onOptionAdd()),
});

export default connect((state) => ({createOption: state.createOption}), mapDispatchToProps)(CreateOptionForm);