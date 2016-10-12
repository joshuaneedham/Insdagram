import { connect } from 'react-redux';
import PostIndex from './post_index';
import { requestPosts } from '../../actions/post_actions';
import { createLike } from '../../actions/like_actions';

const asArray = (obj) => Object.keys(obj).map(key => obj[key]);

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser,
    posts: asArray(state.posts)
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestPosts: () => dispatch(requestPosts()),
  createLike: like => dispatch(createLike(like))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
