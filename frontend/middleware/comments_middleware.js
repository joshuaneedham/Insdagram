import { CREATE_COMMENT} from '../actions/comment_actions';
import { createComment } from '../util/comment_api_util';
import { receivePost } from '../actions/post_actions';

const CommentsMiddleware = ({getState, dispatch}) => next => action => {
  const postSuccess = data => ( dispatch(receivePost(data)));

  switch(action.type){
    case CREATE_COMMENT:
      createComment(action.comment, postSuccess)
      break;
    default:
      return next(action);
  }
};

export default CommentsMiddleware;
