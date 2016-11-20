import { connect } from 'react-redux';
import UserShow from './user_show';
import { requestUser, clearUser } from '../../actions/user_actions';
import { createFollow, destroyFollow } from '../../actions/follow_actions';
import { clearSearchUsers } from '../../actions/search_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  requestUser: id => dispatch(requestUser(id)),
  clearUser: () => dispatch(clearUser()),
  clearSearchUsers: () => dispatch(clearSearchUsers()),
  createFollow: userId => dispatch(createFollow(userId)),
  destroyFollow: userId => dispatch(destroyFollow(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
