import { createFollow, destroyFollow } from '../util/follow_api_util';
import { CREATE_FOLLOW, DESTROY_FOLLOW } from '../actions/follow_actions';
import { receiveUser } from '../actions/user_actions';

const FollowMiddleware = ({getState, dispatch}) => next => action => {

  const followSuccess = data => ( dispatch(receiveUser(data)));

  switch(action.type){
    case CREATE_FOLLOW:
      createFollow(action.userId, followSuccess)
      return next(action);
    case DESTROY_FOLLOW:
      destroyFollow(action.userId, followSuccess)
      return next(action);
  default:
    return next(action);
  }
};

export default FollowMiddleware;
