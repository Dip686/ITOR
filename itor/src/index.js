import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index.js';
import { setHeaderInitialState } from './reducers/headerRecuder';
import { setNaratorInitialState } from './reducers/naratorReducer';
import { setStepsInitialState } from './reducers/stepsReducer';
import * as serviceWorker from './serviceWorker';

export default class ITOR {
  constructor (config) {
    this.config = config;
    setComponentInitialStates(config);
    this.store = createStore(rootReducer);
  }
  startTutorial () {
    let config = this.config,
      elementId = config.renderAt;
    ReactDOM.render(
      <Provider store={this.store}>
        <App />
      </Provider>, document.getElementById(elementId));
  }
}
function setComponentInitialStates (config) {
  setHeaderInitialState(config.header);
  setNaratorInitialState(config.narator);
  setStepsInitialState(config.narator.steps);
}
// var ITOR = {};
// function startTutorial (config) {
//   let elementId = config.renderAt;
//   ReactDOM.render(
//     <Provider store={store}>
//       <App />
//     </Provider>, document.getElementById(elementId));
// }
// ITOR.startTutorial = startTutorial;
window.ITOR = ITOR;
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
