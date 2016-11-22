import { connect } from 'react-redux';
import PostShowModal from './post_show_modal';
import { createLike, destroyLike } from '../../actions/like_actions';
import { requestPost } from '../../actions/post_actions';
import { createFollow, destroyFollow } from '../../actions/follow_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  post: state.posts,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  requestPost: id => dispatch(requestPost(id)),
  createLike: postId => dispatch(createLike(postId)),
  destroyLike: postId => dispatch(destroyLike(postId)),
  createFollow: userId => dispatch(createFollow(userId)),
  destroyFollow: userId => dispatch(destroyFollow(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostShowModal);
