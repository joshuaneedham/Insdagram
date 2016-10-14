import { fetchUsers } from '../util/search_api_util';
import { REQUEST_USERS, receiveUsers } from '../actions/search_actions';

const SearchMiddleware = ({getState, dispatch}) => next => action => {
  const usersSuccess = data => dispatch(receiveUsers(data));

  switch(action.type){
    case REQUEST_USERS:
      fetchUsers(action.username, usersSuccess);
      break;
    default:
      return next(action);
  }
}

export default SearchMiddleware;
