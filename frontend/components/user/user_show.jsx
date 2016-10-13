import React from 'react';

class UserShow extends React.Component {
  constructor(props) {
    super(props);

    this.postText = this.postText.bind(this);
    this.followAction = this.followAction.bind(this);
    this.followStatus = this.followStatus.bind(this);
    this.followText = this.followText.bind(this);
    this.followCssClass = this.followCssClass.bind(this);
    this.followInformationText = this.followInformationText.bind(this);
  }

  componentDidUpdate(){
    const userPosts = this.props.user.posts.map (post =>
      <img key={post.id} src={post.image_url} />
    );
  }

  postText(){
    if (this.props.user.posts.length === 1) {
      return <span className="posts-regular">post</span>;
    } else {
      return <span className="posts-regular">posts</span>;
    }
  }

  followStatus(){
    for (var key in this.props.user.followers) {
      if (this.props.user.followers[key].id === this.props.currentUser.id) {
        return true;
      }
    }
    return false;
  }

  followText() {
    if (this.followStatus()) {
      return "Following";
    } else {
      return "Follow";
    }
  }

  followCssClass(){
    if (this.followStatus()) {
      return "unfollowed-button";
    } else {
      return "followed-button";
    }
  }

  followAction(){
    const userId = this.props.user.id;

    if (this.followStatus()) {
      this.props.destroyFollow(userId);
    } else {
      this.props.createFollow(userId);
    }
  }

  followInformationText(){
    if (this.props.user.followers.length === 1) {
      return "follower";
    } else {
      return "followers";
    }
  }

  render(){
    if (this.props.user.posts) {
      const userPosts = this.props.user.posts.map (post =>
        <img className="user-show-image" key={post.post_id} src={post.image_url} />
      );

      return(
        <div className="user-show-container">
          <div className="user-show-header">
            <div className="user-show-information">
              <div className="username-header">
                <span className="username-title">{this.props.user.username}</span>
                <span className={ this.followCssClass() }
                  onClick={this.followAction}>{ this.followText() }
                </span>
              </div>
              <div className="user-stats">
                <span className="post-stats">
                  <span className="stat-number">{this.props.user.posts.length}</span>
                  <span className="stat-text">{ this.postText() }</span>
                </span>
                <span className="followers-stats">
                  <span className="stat-number">{ this.props.user.followers.length }</span>
                  <span className="stat-text">{ this.followInformationText() }</span>
                </span>
                <span className="following-stats">
                  <span className="stat-number">{ this.props.user.followings.length }</span>
                  <span className="stat-text">following</span>
                </span>
              </div>
              <div className="user-full-name">{this.props.user.full_name}</div>
            </div>
          </div>
          <div className="user-show-body">{ userPosts }</div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default UserShow;
