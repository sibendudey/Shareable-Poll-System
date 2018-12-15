import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import {withStyles} from "@material-ui/core/styles/withStyles";
import CreatePollForm from './components/create_poll/CreatePollForm';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ViewPoll from "./components/view_poll/ViewPoll";
import NavigationBar from "./components/navigation_bar/NavigationBar";
import ViewAllPolls from "./components/view_all_polls/ViewAllPolls";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavigationBar />
            <div>
            <Route exact path="/" component={CreatePollForm}/>
            <Route path="/create_poll" component={CreatePollForm} />
            <Route path="/view_polls" component={ViewAllPolls} />
            <Route path="/view_poll/:poll_id" component={ViewPoll} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}



