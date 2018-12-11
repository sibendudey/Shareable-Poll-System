import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import CreatePollForm from './components/create_poll/CreatePollForm';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
          <Route exact path="/" component={CreatePollForm}/>
          <Route path="/create_poll" component={CreatePollForm} />
          </div>
        </Router>
      </div>
    );
  }
}



