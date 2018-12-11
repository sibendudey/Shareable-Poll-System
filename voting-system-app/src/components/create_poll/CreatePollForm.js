import React from 'react';
import {connect} from 'react-redux';
import {TextArea, Button,} from "carbon-components-react";
import './CreatePollForm.scss'
import {showOptionsForm} from "./CreatePollActions";
import CreateOptionForm from "../create_options/CreateOptionForm";

const CreatePollForm = (props) => {
    const { question, showOptionsForm } = props.createPoll;
    const {dispatchShowOptionsForm } = props;
    return (<div className="form-container">
      <TextArea labelText='Question' defaultValue={question}/>
      <div className="create-poll-button">
        <Button disabled={showOptionsForm} onClick={dispatchShowOptionsForm}>
          { "Create a Poll" }
        </Button>
      </div>
      { showOptionsForm && <CreateOptionForm/>}
    </div>);
};


export const mapStateToProps = (state) => ({
  createPoll: state.createPoll,
})

export const mapDispatchToProps = (dispatch) => ({
  dispatchShowOptionsForm: () => dispatch(showOptionsForm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePollForm);