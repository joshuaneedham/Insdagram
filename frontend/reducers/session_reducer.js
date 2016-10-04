import merge from 'lodash/merge';
import {
  LOGOUT,
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS
} from '../actions/session_actions';

const _defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _defaultState, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, _defaultState, { currentUser: action.currentUser });
    case LOGOUT:
      return _defaultState;
    case RECEIVE_ERRORS:
      return merge({}, _defaultState, { errors: action.errors });
    default:
      return state;
  }
};

export default SessionReducer;
