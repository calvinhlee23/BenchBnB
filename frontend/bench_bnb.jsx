import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import RootComponent from './components/root_component';

const store = configureStore();
document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<RootComponent store = {store}/>,
     document.getElementById("root"));

  // test
});
window.store = store;

import {requestBenches} from './actions/bench_actions';
window.requestBenches = requestBenches;
