import React from 'react';
import { TextInput, Button} from "carbon-components-react";
import { connect } from 'react-redux';
import './createOptionForm.scss';

function options(num) {
  const options = [];
  for (let i = 0; i < num; i++) {
    options.push(<TextInput id={i} labelText="Your option goes here" />);
  };
  return options;
}
const CreateOptionForm = (props) => {
  const {numOfOptions} = props.createOption;
  return (<React.Fragment>
    <Button className="add-option-button">Add Option</Button>
    { options(numOfOptions) }
  </React.Fragment>);
};


export default connect((state) => ({createOption: state.createOption}))(CreateOptionForm);