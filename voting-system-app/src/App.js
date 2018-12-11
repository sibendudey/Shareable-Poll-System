import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import CreatePollForm from './components/create_poll/CreatePollForm';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <CreatePollForm />
      </div>
    );
  }
}



