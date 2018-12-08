import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
class App extends Component {
  render() {
    const { createPoll } = this.props;
    return (
      <div className="App">
        <body>
        { createPoll.question }
        </body>
      </div>
    );
  }
}


export default connect((state) => ({
  createPoll: state.createPoll,
}))(App);
