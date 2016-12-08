import { connect } from 'react-redux';
import SuggestedUsers from './suggested_users';

const mapStateToProps = (state) => {
  return ({
    suggestedUsers: (state.suggestedUsers)
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SuggestedUsers);
