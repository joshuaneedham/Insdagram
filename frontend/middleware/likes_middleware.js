import { createLike, destroyLike } from '../util/likes_api_util';
import { CREATE_LIKE, DESTROY_LIKE } from '../actions/like_actions';
import { receivePost } from '../actions/post_actions';

const LikesMiddleware = ({getState, dispatch}) => next => action => {

  const postSuccess = data => ( dispatch(receivePost(data)));

  switch(action.type){
    case CREATE_LIKE:
      createLike(action.postId, postSuccess)
      return next(action);
    case DESTROY_LIKE:
      destroyLike(action.postId, postSuccess)
      return next(action);
  default:
    return next(action);
  }
};

export default LikesMiddleware;
