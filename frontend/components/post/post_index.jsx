import React from 'react';
import PostIndexItem from '../post_index_item/post_index_item';
// import PostIndexItemContainer from '../post_index_item/post_index_item_container';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestPosts();
  }

  render(){
    const posts = this.props.posts.map( post =>
      <PostIndexItem post={post}
        key={post.id}
        currentUser={this.props.currentUser}
        createLike={this.props.createLike}
        />
    );

    return (
      <div className="post-index-items">
         { posts }
      </div>
    );
  }
}

export default PostIndex;
