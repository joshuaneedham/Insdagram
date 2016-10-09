import {
  requestPosts,
  receivePost,
  receivePosts,
  REQUEST_POSTS,
  REQUEST_POST,
  CREATE_POST
} from '../actions/post_actions';

import { fetchPosts, createPost } from '../util/post_api_util';

const PostsMiddleware = ({getState, dispatch}) => next => action => {
  const postsSuccess = data => dispatch(receivePosts(data));
  const postSuccess = data => {
    action.success();
    return dispatch(receivePost(data));
  }
  const result = next(action);
  switch(action.type){
    case REQUEST_POSTS:
      fetchPosts(postsSuccess);
      return next(action);
    case CREATE_POST:
      createPost(action.post, postSuccess);
      break;
    default:
      return next(action);
  }
};

export default PostsMiddleware;
