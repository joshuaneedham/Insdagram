import { connect } from 'react-redux';
import PostIndexItem from './post_index_item';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  posts: state.posts
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndexItem);
