import { fetchUser } from '../util/user_api_util';
import { REQUEST_USER, receiveUser } from '../actions/user_actions';

const UserMiddleware = ({getState, dispatch}) => next => action => {
  const userSuccess = data => ( dispatch(receiveUser(data)))

  switch(action.type){
    case REQUEST_USER:
      fetchUser(action.id, userSuccess);
      break;
    default:
      return next(action);
  }
}

export default UserMiddleware;
