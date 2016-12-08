import { connect } from 'react-redux';
import SuggestedUsers from './suggested_users';
import { createFollow, destroyFollow } from '../../actions/follow_actions';
import { requestPosts } from '../../actions/post_actions';

const mapStateToProps = (state) => {
  return ({
    suggestedUsers: (state.suggestedUsers),
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  createFollow: userId => dispatch(createFollow(userId)),
  destroyFollow: userId => dispatch(destroyFollow(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SuggestedUsers);
