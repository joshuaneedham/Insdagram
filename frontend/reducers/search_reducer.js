import merge from 'lodash/merge';
import { RECEIVE_USERS, CLEAR_USERS } from '../actions/search_actions';

const SearchReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_USERS:
      return action.users;
    case CLEAR_USERS:
      return {};
    default:
      return state;
  }
};

export default SearchReducer;
