import { RECEIVE_USER, CLEAR_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const UserReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_USER:
      return action.user;
    case CLEAR_USER:
      return {};
    default:
      return state;
  }
};

export default UserReducer;
