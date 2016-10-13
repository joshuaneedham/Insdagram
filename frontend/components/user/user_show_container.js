import { connect } from 'react-redux';
import UserShow from './user_show';
import { requestUser } from '../../actions/user_actions';
import { createFollow, destroyFollow } from '../../actions/follow_actions';

const mapStateToProps = state => {
  return { user: state.user };
};

const mapDispatchToProps = dispatch => ({
  requestUser: id => dispatch(requestUser(id)),
  createFollow: userId => dispatch(createFollow(userId)),
  destroyFollow: userId => dispatch(destroyFollow(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
