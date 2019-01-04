import React from 'react';
import ReactDOM from 'react-dom';
import styles from 'carbon-components/css/carbon-components.css';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import createPollReducer from "./components/create_poll/CreatePollReducer";
import createOptionReducer from "./components/create_options/CreateOptionReducer";
import viewPollReducer from "./components/view_poll/ViewPollReducer";
import {navigationBarReducer} from "./components/navigation_bar/NavigationBarReducer";
import {viewAllPollsReducer} from "./components/view_all_polls/ViewAllPollsReducer";
import webSocketReducer from "./reducers/WebSocketReducer";
import {registrationFormReducer} from "./components/register_form/RegistrationFormReducers";

const reducers = combineReducers({
  createPoll: createPollReducer,
  createOption: createOptionReducer,
  viewPoll: viewPollReducer,
  navigationBar: navigationBarReducer,
  viewAllPolls: viewAllPollsReducer,
  webSocket: webSocketReducer,
  register: registrationFormReducer,
});
const store = createStore(reducers, applyMiddleware(thunk));

const app =
  <Provider store={store}>
    <App/>
  </Provider>;
  
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
