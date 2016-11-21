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
            <p className="modal-username"
              onClick={() => this.navigateUserShow(currentPost.user_id)}>{currentPost.user.username}</p>
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
