import { RECEIVE_POSTS, RECEIVE_POST} from '../actions/post_actions';
import merge from 'lodash/merge';

const PostsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_POSTS:
      return action.posts;
    default:
      return state;
  }
};

export default PostsReducer;
