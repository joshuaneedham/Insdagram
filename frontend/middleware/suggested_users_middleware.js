import { fetchSuggestedUsers } from '../util/suggested_users_api_util';
import { requestSuggestedUsers, REQUEST_SUGGESTED_USERS, receiveSuggestedUsers, RECEIVE_SUGGESTED_USERS } from '../actions/suggested_users_actions';

const SuggestedUsersMiddleware = ({getState, dispatch}) => next => action => {
  const suggestedUsersSuccess = data => dispatch(receiveSuggestedUsers(data));

  switch(action.type){
    case REQUEST_SUGGESTED_USERS:
      fetchSuggestedUsers(suggestedUsersSuccess);
      break;
    default:
      return next(action);
  }
}

export default SuggestedUsersMiddleware;
