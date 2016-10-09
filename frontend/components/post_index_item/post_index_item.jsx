import React from 'react';
import { hashHistory } from 'react-router';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let username = this.props.post.user.username.concat(" ");

    return(
      <div className="post-index-item">
        <div className="post-index-item-header">
          <h5 className="username-link">
            { username }
          </h5>
        </div>
        <img className="post-picture"
          height="600"
          width="600"
          src={this.props.post.image_url} />
        <div className="post-index-item-footer">
          <div className="caption-holder">
            <div className="caption-username">{ username } </div>
            <div className="caption-text">{this.props.post.caption}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostIndexItem;
