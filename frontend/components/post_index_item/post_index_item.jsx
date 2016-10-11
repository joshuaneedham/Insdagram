import React from 'react';
import { hashHistory } from 'react-router';
import CommentForm from '../comment_form/comment_form';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.timeSincePost = this.timeSincePost.bind(this);
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

  render() {
    let username = this.props.post.user.username.concat(" ");

    return(
      <div className="post-index-item">
        <div className="post-index-item-header">
          <h5 className="username-link">
            { username }
          </h5>
          <div className="post-time">
            {this.timeSincePost(this.props.post.created_at)}
          </div>
        </div>
        <img className="post-picture"
          src={this.props.post.image_url} />
        <div className="post-index-item-footer">
          <div className="caption-holder">
              <div className="caption-username">{ username }</div>
              <div className="caption-text">{this.props.post.caption}</div>
          </div>
          
          <CommentForm />
        </div>
      </div>
    );
  }
}

export default PostIndexItem;
