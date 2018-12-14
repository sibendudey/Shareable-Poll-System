import React from 'react';
import {connect} from 'react-redux';
import {TextArea, Button, Modal} from "carbon-components-react";
import './CreatePollForm.scss'
import {createOptions, createPoll, onQuestionChange, resetPollForm} from "./CreatePollActions";
import CreateOptionForm from "../create_options/CreateOptionForm";

const CreatePollForm = (props) => {
    const { question, showOptionsForm, showModal, id } = props.createPoll;
    const {dispatchCreatePoll, dispatchCreateOption, dispatchOnQuestionChange, dispatchResetForm} = props;
    return (<div className="form-container">
      { <Modal
        open={showModal}
        primaryButtonText="OK"
        secondaryButtonText="Dismiss"
        onRequestSubmit={dispatchResetForm}
        onRequestClose={dispatchResetForm}>
        
        Shareable Link: { 'localhost:3000/view_poll/' + id}
      </Modal> }
    <TextArea labelText='Question' value={question} onChange={dispatchOnQuestionChange}/>
    <div className="create-poll-button">
      <Button disabled={showOptionsForm} onClick={() => dispatchCreatePoll({ question })}>
        { "Create a Poll" }
      </Button>
    </div>
    { showOptionsForm &&
      <CreateOptionForm/>}
      {
        showOptionsForm &&
        <div className="create-link-button">
          <Button onClick={dispatchCreateOption}>Get Link</Button>
        </div>
      }
  </div>);
};


export const mapStateToProps = (state) => ({
  createPoll: state.createPoll,
})

export const mapDispatchToProps = (dispatch) => ({
  dispatchCreatePoll: (poll) => dispatch(createPoll(poll)),
  dispatchCreateOption: () => dispatch(createOptions()),
  dispatchOnQuestionChange: (event) => dispatch(onQuestionChange(event)),
  dispatchResetForm: () => dispatch(resetPollForm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePollForm);