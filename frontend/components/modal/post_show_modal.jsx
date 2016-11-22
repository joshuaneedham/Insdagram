import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter, hashHistory } from 'react-router';
import CommentForm from '../comment_form/comment_form_container';

class PostShowModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { follow: 0 };

    this.likeText = this.likeText.bind(this);
    this.navigateUserShow = this.navigateUserShow.bind(this);
    this.likeAction = this.likeAction.bind(this);
    this.checkUser = this.checkUser.bind(this);
    this.followAction = this.followAction.bind(this);
  }

  componentDidMount(){
    this.props.requestPost(this.props.state.currentImage);
  }

  navigateUserShow(id) {
    this.props.closeModal();
    hashHistory.push(`/user/${id}`);
  }

  likeText(){
    if (Object.values(this.props.post)[0].likes.length === 1) {
      return <span> like</span>;
    } else {
      return <span> likes</span>;
    }
  }

  likeStatus(){
    for (var key in Object.values(this.props.post)[0].likes) {
      if (Object.values(this.props.post)[0].likes[key].user_id === this.props.currentUser.id) {
        return true;
      }
    }
    return false;
  }

  likeAction(){
    const postId = Object.values(this.props.post)[0].id;

    if (this.likeStatus()) {
      this.props.destroyLike(postId);
    } else {
      this.props.createLike(postId);
    }
  }


  likeCssClass(){
    if (this.likeStatus()) {
      return "material-icons liked-heart-icon";
    } else {
      return "material-icons unliked-heart-icon";
    }
  }

  likeIcon(){
    if (this.likeStatus()) {
      return "favorite";
    } else {
      return "favorite_border";
    }
  }

  checkUser(){
    if (this.props.currentUser.id !== Object.values(this.props.post)[0].user_id) {
      return(
        <span className={ this.followCssClass() }
          onClick={this.followAction}>{ this.followText() }
        </span>
      );
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
    this.setState({follow: this.state.follow + 1});

    const userId = Object.values(this.props.post)[0].user_id;
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
    if (Object.keys(this.props.post).length === 1) {
      let currentPost = Object.values(this.props.post)[0];
      const commentsRender = currentPost.comments.map( comment =>
        <div className="single-comment"
          key={comment.id}>
          <div className="caption-username comment-username"
            onClick={() => this.navigateUserShow(comment.user_id)}>
              {comment.username}
          </div>
          <div className="caption-text comment-text">{comment.body}</div>
        </div>
      );
      return (
        <div className="modal-content">
          <img className="modal-image" src={currentPost.image_url}/>
          <div className="modal-right">
            <span className="modal-username"
              onClick={() => this.navigateUserShow(currentPost.user_id)}>{currentPost.user.username}</span>
            { this.checkUser() }
            <div className="like-count">
              { currentPost.likes.length }
              { this.likeText() }
            </div>
            <div className="caption-text">
              <span className="caption-username"
                onClick={() => this.navigateUserShow(currentPost.user_id)}>
                {currentPost.user.username}
              </span>
              <span className="caption-text"> {currentPost.caption}</span>
            </div>
            <div className="comments-render">
              { commentsRender }
            </div>
            <div className="like-comment-render">
              <div className="material-icons" onClick={this.likeAction}>
                <i className={this.likeCssClass()}>{this.likeIcon()}</i>
              </div>
              <CommentForm postId={currentPost.id} />
            </div>
          </div>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default PostShowModal;
