import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import CommentForm from '../comment_form/comment_form_container';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { active: false };

    this.timeSincePost = this.timeSincePost.bind(this);
    this.navigateUserShow = this.navigateUserShow.bind(this);
    this.likeText = this.likeText.bind(this);
    this.likeAction = this.likeAction.bind(this);
    this.likeCssClass = this.likeCssClass.bind(this);
    this.likeIcon = this.likeIcon.bind(this);
    this.likeStatus = this.likeStatus.bind(this);
    this.likeTransition = this.likeTransition.bind(this);
    this.oneWayLikeAction = this.oneWayLikeAction.bind(this);
    this.transitionHeartClass = this.transitionHeartClass.bind(this);
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
    hashHistory.push(`/user/${id}`);
  }

  likeText(){
    if (this.props.post.likes.length === 1) {
      return <span> like</span>;
    } else {
      return <span> likes</span>;
    }
  }

  likeStatus(){
    for (var key in this.props.post.likes) {
      if (this.props.post.likes[key].user_id === this.props.currentUser.id) {
        return true;
      }
    }
    return false;
  }

  likeAction(){
    const postId = this.props.post.id;

    if (this.likeStatus()) {
      this.props.destroyLike(postId);
    } else {
      this.props.createLike(postId);
    }
  }

  oneWayLikeAction(){
    if (!this.likeStatus()) {
      this.likeAction();
      this.setState({active: true});
    }
  }

  heartClass(){
    if (this.state.active === false) {
      return "no-display-heart";
    } else if (this.state.active === true) {
      setTimeout(this.transitionHeartClass, 400);
      return "display-heart";
    }
  }

  transitionHeartClass(){
      this.setState({active: false});
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

  likeTransition(){

  }

  render() {
    let username = this.props.post.user.username.concat(" ");
    const commentsRender = this.props.post.comments.map( comment =>
      <div className="single-comment"
        key={comment.id}>
        <div className="caption-username comment-username"
          onClick={() => this.navigateUserShow(comment.user_id)}>
            {comment.username}
        </div>
        <div className="caption-text comment-text">{comment.body}</div>
      </div>
    );
    // onClick={() => this.navigateUserShow(this.props.post.user_id)}

    return(
      <div className="post-index-item">
        <div className="post-index-item-header">
          <h5 className="username-link"
            onClick={() => this.navigateUserShow(this.props.post.user_id)}>
            { username }
          </h5>
          <div className="post-time">
            {this.timeSincePost(this.props.post.created_at)}
          </div>
        </div>
        <div className="photo-container">
          <img className="post-picture"
            onDoubleClick={this.oneWayLikeAction}
            src={this.props.post.image_url} />
          <img className={this.heartClass()} src={insdagramAssets.whiteHeart} />
        </div>
        <div className="post-index-item-footer">
          <div className="caption-comment-holder">
            <div className="caption-holder">
              <div className="like-count">
                { this.props.post.likes.length }
                { this.likeText() }
              </div>
              <span className="caption-username"
                onClick={() => this.navigateUserShow(this.props.post.user_id)}>
                { username }
              </span>
              <span className="caption-text"> {this.props.post.caption}</span>
            </div>
            <div className="comments-render">
              { commentsRender }
            </div>
          </div>
          <div className="like-comment-render">
            <div className="material-icons" onClick={this.likeAction}>
              <i className={this.likeCssClass()}>{this.likeIcon()}</i>
            </div>
            <CommentForm postId={this.props.post.id} />
          </div>
        </div>
      </div>
    );
  }
}

export default PostIndexItem;
