import React from 'react';
import {connect} from 'react-redux';
import {Loading} from "carbon-components-react";
import {fetchPoll} from "./ViewPollActions";
import styles from './viewPoll.scss';

class ViewPoll extends React.Component{
  
  componentDidMount() {
    this.props.dispatchFetchPoll(1);
  }
  render()  {
    const { isLoading, poll } = this.props.viewPoll;
    return (<div className="view-poll-container">
      { isLoading && <Loading />}
      <div>
        Question: { poll.question }
      </div>
      <div>
        Options: { (poll.options || []).map((o) =>  (<div>
        {o.description}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewPoll);