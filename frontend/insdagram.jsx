import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';
import Modal from 'react-modal';

// import { signup, login, logout } from './util/session_api_util.js';
// // testing AJAX functions from the console

// import {
//   receiveCurrentUser,
//   receiveErrors,
//   logout,
//   login,
//   signup
// } from './actions/session_actions';
// window.signup = signup;
// window.login = login;
// window.logout = logout;
// window.receiveCurrentUser = receiveCurrentUser;
// window.receiveErrors = receiveErrors;
// // testing Session Actions from the console

// import {
//   requestPosts,
//   requestPost,
//   receivePosts,
//   receivePost,
//   createPost
// } from './actions/post_actions';
// window.requestPosts = requestPosts;
// window.requestPost = requestPost;
// window.receivePosts = receivePosts;
// window.receivePost = receivePost;
// window.createPost = createPost;
// // testing Post Actions from the console

// import { requestUser } from './actions/post_actions';
// window.store = configureStore();
// window.requestUser = requestUser;


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const initialState = { session: { currentUser: window.currentUser } };
    store = configureStore(initialState);
  } else {
    store = configureStore();
  }
  window.store = store;

  Modal.setAppElement(document.body);
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
