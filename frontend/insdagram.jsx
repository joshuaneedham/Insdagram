import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';

// import { signup, login, logout } from './util/session_api_util.js';
// // testing AJAX functions from the console

import {
  receiveCurrentUser,
  receiveErrors,
  logout,
  login,
  signup
} from './actions/session_actions';
// window.signup = signup;
window.login = login;
// window.logout = logout;
// window.receiveCurrentUser = receiveCurrentUser;
// window.receiveErrors = receiveErrors;
// // testing Session Actions from the console

document.addEventListener('DOMContentLoaded', () => {
  let store;
  store = configureStore();
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
