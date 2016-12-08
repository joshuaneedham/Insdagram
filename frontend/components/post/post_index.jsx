import React from 'react';
import PostIndexItem from '../post_index_item/post_index_item_container';
import SuggestedUsersContainer from '../suggested_users/suggested_users_container';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestPosts();
    this.props.requestSuggestedUsers();
  }

  // componentWillReceiveProps(nextProps){
  //   nextProps
  // }

  render(){
    const posts = this.props.posts.map( post =>
      <PostIndexItem post={post}
        key={post.id}
        currentUser={this.props.currentUser}
        />
    );

    const indexItems = (
      <div className="post-index-items">
         { posts }
      </div>
    );


    if (Array.isArray(this.props.suggestedUsers)){
      if (this.props.posts.length > 5) {
        return (
          indexItems
        );
      } else {
        return (
          <div>
            <SuggestedUsersContainer />
            { indexItems }
          </div>
        );
      }
    } else {
      return (<div></div>);
    }
  }
}

export default PostIndex;
