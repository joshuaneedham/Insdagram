import React from 'react';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(){
    const userPosts = this.props.user.posts.map (post =>
      <img key={post.id} src={post.image_url} />
    );
  }

  render(){
    if (this.props.user.posts) {
      const userPosts = this.props.user.posts.map (post =>
        <img key={post.post_id} src={post.image_url} />
      );
      return( <div>{ userPosts }</div> );
    } else {
      return <div></div>;
    }
  }
}

export default UserShow;
