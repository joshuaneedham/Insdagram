import { connect } from 'react-redux';
import UserShow from './user_show';

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  requestUser: (id, success) => dispatch(requestUser(id, success))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
