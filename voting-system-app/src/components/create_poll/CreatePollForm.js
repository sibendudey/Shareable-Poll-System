import React from 'react';
import {connect} from 'react-redux';
import {TextArea, Button,} from "carbon-components-react";
import './CreatePollForm.scss'
import {createOptions, createPoll, onQuestionChange} from "./CreatePollActions";
import CreateOptionForm from "../create_options/CreateOptionForm";

const CreatePollForm = (props) => {
    const { question, showOptionsForm } = props.createPoll;
    const {dispatchCreatePoll, dispatchCreateOption, dispatchOnQuestionChange} = props;
    return (<div className="form-container">
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
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePollForm);