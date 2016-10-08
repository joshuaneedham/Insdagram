import { connect } from 'react-redux';
import PostForm from './post_form';
import { createPost } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createPost: (post, success) => dispatch(createPost(post, success))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
