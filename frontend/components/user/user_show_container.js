import { connect } from 'react-redux';
import UserShow from './user_show';
import { requestUser } from '../../actions/user_actions';

const mapStateToProps = state => {
  return { user: state.user };
};

const mapDispatchToProps = dispatch => ({
  requestUser: id => dispatch(requestUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
