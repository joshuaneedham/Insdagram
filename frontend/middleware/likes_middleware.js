
import { CREATE_LIKE } from '../actions/like_actions';
import { receivePost } from '../actions/post_actions';

const LikesMiddleware = ({getState, dispatch}) => next => action => {
  const postSuccess = data => ( dispatch(receivePost(data)));

  switch(action.type){
    case CREATE_LIKE:
      createLike(action.like, postSuccess)
      return next(action);
  default:
    return next(action);
  }
};

export default LikesMiddleware;
