import { RECEIVE_SUGGESTED_USERS } from '../actions/suggested_users_actions';

const SuggestedUsersReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_SUGGESTED_USERS:
      return action.users;
    default:
      return state;
  }
};

export default SuggestedUsersReducer;
