import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './nav_bar';
import { requestUser } from '../../actions/user_actions';
import { requestUsers } from '../../actions/search_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  searchUsers: state.searchUsers
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  requestUser: id => dispatch(requestUser(id)),
  requestUsers: (username) => dispatch(requestUsers(username))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
