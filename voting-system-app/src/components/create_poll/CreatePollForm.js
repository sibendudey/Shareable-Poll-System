import React from 'react';
import {connect} from 'react-redux';
import {Modal} from "carbon-components-react";
import './CreatePollForm.scss';
import {createOptions, createPoll, ipRestrictionChange, onQuestionChange, resetPollForm} from "./CreatePollActions";
import CreateOptionForm from "../create_options/CreateOptionForm";
import {TextField, Button as MaterialButton, Tooltip, Checkbox} from '@material-ui/core';
import {HOST_ADDRESS} from "../../HostAddress";

const CreatePollForm = (props) => {
  const {question, showOptionsForm, showModal, id, ipRestricted} = props.createPoll;
  const disableGetLinkButton = !props.createOption.isValid;
  const {dispatchCreatePoll, dispatchCreateOption, dispatchOnQuestionChange, dispatchResetForm, dispatchOnIpRestrictionChange} = props;
  return (<div className="form-container">
    {<Modal
      open={showModal}
      primaryButtonText="OK"
      secondaryButtonText="Dismiss"
      onRequestSubmit={dispatchResetForm}
      onRequestClose={dispatchResetForm}>
      Shareable Link: {HOST_ADDRESS + '/view_poll/' + id}
    </Modal>}
    <TextField helperText='Put your poll question here' label='Question' id='question' type='text' value={question}
               onChange={dispatchOnQuestionChange}/>
    <div className="checkbox-container">
      <Checkbox checked={ipRestricted} onChange={dispatchOnIpRestrictionChange}
                value={"IP Restricted Voting"}/>
      IP Restricted Voting
    </div>
    <div className="create-poll-button">
      <MaterialButton disabled={question.trim() === ''} variant="contained"
                      onClick={() => dispatchCreatePoll({question, ipRestricted})}>
        Create Poll
      </MaterialButton>
    </div>
    {showOptionsForm &&
    <CreateOptionForm/>}
    {
      <div className="create-link-button">
        {
          showOptionsForm && disableGetLinkButton &&
          <Tooltip title="Poll should have atleast two options">
            <div><MaterialButton disabled variant="contained">Get Link</MaterialButton></div>
          </Tooltip>
        }
        {
          showOptionsForm && !disableGetLinkButton &&
          <MaterialButton variant="contained" onClick={dispatchCreateOption}>Get Link</MaterialButton>
        }
      </div>
    }
  </div>);
};


export const mapStateToProps = (state) => ({
  createPoll: state.createPoll,
  createOption: state.createOption,
});

export const mapDispatchToProps = (dispatch) => ({
  dispatchCreatePoll: (poll) => dispatch(createPoll(poll)),
  dispatchCreateOption: () => dispatch(createOptions()),
  dispatchOnQuestionChange: (event) => dispatch(onQuestionChange(event)),
  dispatchOnIpRestrictionChange: (ev, checked) => dispatch(ipRestrictionChange({checked})),
  dispatchResetForm: () => dispatch(resetPollForm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePollForm);