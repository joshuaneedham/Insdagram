import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';


const Root = ({ store }) => {
  const currentUser = store.getState().session.currentUser;

  const _redirectIfLoggedIn = (nextState, replace) => {
    if (currentUser) { replace('/'); }
  }

  const _ensureLoggedIn = (nextState, replace) => {
    if (!currentUser) { replace('/login'); }
  }

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} onEnter={_ensureLoggedIn}>
        </Route>
        <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
        <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
      </Router>
    </Provider>
  );
}

export default Root;
