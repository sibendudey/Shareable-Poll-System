import React from 'react';
import {connect} from 'react-redux';
import {Loading} from "carbon-components-react";
import { Button as MaterialButton} from '@material-ui/core';
import {fetchPoll, vote} from "./ViewPollActions";
import { Line } from 'rc-progress';
import styles from './viewPoll.scss';

class ViewPoll extends React.Component{
  
  componentDidMount() {
    const { poll_id } = this.props.match.params;
    this.props.dispatchFetchPoll(poll_id);
  }
  
  render()  {
    const { isLoading, poll } = this.props.viewPoll;
    const { dispatchVote } = this.props;
    return (<div className="view-poll-container">
      { isLoading && <Loading />}
      <div className="question-container">
        <div style={{ display: "flex", flexFlow: "row"}}>{ poll.question }</div>
      </div>
      <div>
        { (poll.pollOptions || []).map((o, index) =>  (<div key={ '' + index} className={"option-container"}>
          <div  style={{ display: "flex", flexFlow: "row", marginTop: "10px" }}>
            <div>{o.description}</div>
            <div style={{ marginLeft: "auto"}}>
              <MaterialButton variant="contained" onClick={ () => dispatchVote(o.id)}>Vote</MaterialButton>
            </div>
          </div>
          <div><Line strokeWidth="4" percent={poll.percentage[index]} /></div>
      </div>))}
      </div>
      </div>);
  }
}

export const mapStateToProps = (state) => ({
  viewPoll: state.viewPoll,
});


export const mapDispatchToProps = (dispatch) => ({
  dispatchFetchPoll: (id) => dispatch(fetchPoll(id)),
  dispatchVote: (id) => dispatch(vote(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewPoll);