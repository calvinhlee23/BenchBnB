import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

class Test extends React.Component {
  render () {
    return (
      <div>Hello from Test! YAY!</div>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Test/>, document.getElementById("root"));
  // test
  const store = configureStore();
  window.store = store;

});

import {requestBenches} from './actions/bench_actions';
window.requestBenches = requestBenches;
