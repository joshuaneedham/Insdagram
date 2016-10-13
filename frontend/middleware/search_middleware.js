import { fetchUsers } from '../util/user_api_util';
import { REQUEST_USERS, receiveUsers } from '../actions/user_actions';

const SearchMiddleware = ({getState, dispatch}) => next => action => {
  const usersSuccess = data => ( dispatch(receiveUsers(data)))

  switch(action.type){
    case REQUEST_USERS:
      fetchUsers(action.username, usersSuccess);
      break;
    default:
      return next(action);
  }
}

export default SearchMiddleware;
