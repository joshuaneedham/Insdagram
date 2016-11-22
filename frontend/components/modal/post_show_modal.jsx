import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter, hashHistory } from 'react-router';
import CommentForm from '../comment_form/comment_form_container';

class PostShowModal extends React.Component {
  constructor(props) {
    super(props);

    this.likeText = this.likeText.bind(this);
    this.navigateUserShow = this.navigateUserShow.bind(this);
    this.likeAction = this.likeAction.bind(this);
    this.checkUser = this.checkUser.bind(this);
    this.followAction = this.followAction.bind(this);
    this.timeSincePost = this.timeSincePost.bind(this);
  }

  componentDidMount(){
    this.props.requestPost(this.props.state.currentImage);
  }

  timeSincePost(createdAt){
    let currentTime = new Date();
    let currentMinutes = currentTime.getUTCMinutes();
    let currentHours = currentTime.getUTCHours();
    let currentDate = currentTime.getUTCDate();
    let currentMonth = currentTime.getUTCMonth();
    let currentYear = currentTime.getUTCFullYear();

    let postYear = createdAt.slice(0, 4);
    let postMonth = createdAt.slice(5, 7);
    let postDate = createdAt.slice(8, 10);
    let postHours = createdAt.slice(11, 13);
    let postMinutes = createdAt.slice(14, 16);
    let postSeconds = createdAt.slice(17, 19);

    let dateResult;

    if (currentYear > postYear) {
      dateResult = currentYear - postYear;
      dateResult = dateResult + "y";
    } else if (currentMonth > postMonth) {
      dateResult = currentMonth - postMonth;
      dateResult = dateResult + "m";
    } else if(currentDate > postDate) {
      dateResult = currentDate - postDate;
      if (dateResult > 6) {
        dateResult = Math.floor(dateResult / 7);
        dateResult = dateResult + "w";
      } else {
      dateResult = dateResult + "d";
      }
    } else if (currentHours > postHours) {
      dateResult = currentHours- postHours;
      dateResult = dateResult + "h";
    } else {
      dateResult = currentMinutes- postMinutes;
      dateResult = dateResult + "m";
    }

    return dateResult;
  }

  navigateUserShow(id) {
    this.props.closeModal();
    hashHistory.push(`/user/${id}`);
  }

  likeText(){
    if (this.currentPost.likes.length === 1) {
      return <span> like</span>;
    } else {
      return <span> likes</span>;
    }
  }

  likeStatus(){
    for (var key in this.currentPost.likes) {
      if (this.currentPost.likes[key].user_id === this.props.currentUser.id) {
        return true;
      }
    }
    return false;
  }

  likeAction(){
    const postId = this.currentPost.id;

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
    if (this.props.currentUser.id !== this.currentPost.user_id) {
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

    const userId = this.currentPost.user_id;
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

    if (this.props.post[Object.keys(this.props.post)[0]] !== undefined && this.props.state.currentImage === this.props.post[Object.keys(this.props.post)[0]].id){
      this.currentPost = this.props.post[Object.keys(this.props.post)[0]];
      const commentsRender = this.currentPost.comments.map( comment =>
        <div className="single-comment"
          key={comment.id}>
          <div className="caption-username comment-username"
            onClick={() => this.navigateUserShow(comment.user_id)}>
              {comment.username}
          </div>
          <span className="caption-text comment-text modal-text">{comment.body}</span>
        </div>
      );
      return (
        <div className="modal-content">
          <img className="modal-image" src={this.currentPost.image_url}/>
          <div className="modal-right">
            <div className="modal-upper">
              <div className="modal-header">
                <span className="modal-username"
                    onClick={() => this.navigateUserShow(this.currentPost.user_id)}>{this.currentPost.user.username}</span>
                  { this.checkUser() }
              </div>
              <div className="like-count-modal">
                <span>
                  { this.currentPost.likes.length }
                  { this.likeText() }
                </span>
                <span className="modal-time">
                  {this.timeSincePost(this.currentPost.created_at)}
                </span>
              </div>
              <div className="caption-text-modal">
                <span className="caption-username"
                  onClick={() => this.navigateUserShow(this.currentPost.user_id)}>
                  {this.currentPost.user.username}
                </span>
                <span className="caption-text-modal"> {this.currentPost.caption}</span>
              </div>
              <div className="comments-render">
                { commentsRender }
              </div>
            </div>
            <div className="like-comment-render-modal">
              <div className="material-icons" onClick={this.likeAction}>
                <i className={this.likeCssClass()}>{this.likeIcon()}</i>
              </div>
              <CommentForm postId={this.currentPost.id} />
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
