import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';

// import { signup, login, logout } from './util/session_api_util.js';
// // testing AJAX functions from the console

import {
  receiveCurrentUser,
  receiveErrors,
  logout,
  login,
  signup
} from './actions/session_actions';
// testing Session Actions from the console

window.signup = signup;
window.login = login;
window.logout = logout;
window.receiveCurrentUser = receiveCurrentUser;
window.receiveErrors = receiveErrors;

document.addEventListener('DOMContentLoaded', () => {
    window.store = configureStore();
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Insdagram</h1>, root);
});
