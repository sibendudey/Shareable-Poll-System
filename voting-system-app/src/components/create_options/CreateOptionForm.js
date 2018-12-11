import React from 'react';
import {TextInput, Button, Icon} from "carbon-components-react";
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
            <TextInput className="option-text" id={i} value={option.value} onChange={(ev) => this.onOptionTextChange(ev, i)}/>
            <Icon className='option-close' name='icon--close--outline' onClick={() => dispatchOnOptionClose(i)}/>
            </div>)) }
        <Button className="add-option-button" onClick={dispatchOnOptionAdd}>Add Option</Button>
      </React.Fragment>);
    }
}


const mapDispatchToProps = (dispatch) => ({
  dispatchOnOptionTextChange: (text, index) => dispatch(onOptionTextChange(text, index)),
  dispatchOnOptionClose: (index) => dispatch(onOptionClose(index)),
  dispatchOnOptionAdd: () => dispatch(onOptionAdd()),
})
export default connect((state) => ({createOption: state.createOption}), mapDispatchToProps)(CreateOptionForm);