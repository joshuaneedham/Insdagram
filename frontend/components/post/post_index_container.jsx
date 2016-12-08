import { connect } from 'react-redux';
import PostIndex from './post_index';
import { requestPosts } from '../../actions/post_actions';
import { requestSuggestedUsers } from '../../actions/suggested_users_actions';
import { createLike, destroyLike } from '../../actions/like_actions';

const asArray = (obj) => Object.keys(obj).reverse().map(key => obj[key]);

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser,
    posts: asArray(state.posts),
    suggestedUsers: (state.suggestedUsers)
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestPosts: () => dispatch(requestPosts()),
  createLike: postId => dispatch(createLike(postId)),
  destroyLike: postId => dispatch(destroyLike(postId)),
  requestSuggestedUsers: () => dispatch(requestSuggestedUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
