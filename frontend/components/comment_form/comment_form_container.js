import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createPost } from '../../actions/comment_actions';

const mapStateToProps = state => {
  return;
};

const mapDispatchToProps = dispatch => ({
  createComment: () => dispatch(createComment())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
