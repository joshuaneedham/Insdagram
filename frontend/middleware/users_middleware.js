import { fetchUser } from '../util/user_api_util';
import { REQUEST_USER } from '../actions/user_actions';

const UsersMiddleware = ({getState, dispatch}) => next => action => {
  const userSuccess = data => ( dispatch(receivePost(data)))

  switch(action.type){
    case REQUEST_USER:
      fetchUser(userSuccess);
      break;
    default:
      return next(action);
  }
}

export default UsersMiddleware;
