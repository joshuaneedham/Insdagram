import React from 'react';
import { Link, hashHistory } from 'react-router';

class SuggestedUsers extends React.Component {
	constructor(props) {
		super(props);

    this.navigateUserShow = this.navigateUserShow.bind(this);
    this.checkUser = this.checkUser.bind(this);
    this.followAction = this.followAction.bind(this);
    this.followStatus = this.followStatus.bind(this);
	}

  navigateUserShow(id) {
    hashHistory.push(`/user/${id}`);
  }

  checkUser(id){
    if (this.props.currentUser.id !== id) {
      return(
        <span className={ this.followCssClass(id) }
          onClick={this.followAction(id)}>{ this.followText(id) }
        </span>
      );
    }
  }

  followStatus(id){
    if (this.props.currentUser.followings.includes(id)) {
      return true;
    }
    return false;
  }

  followText(id) {
    if (this.followStatus(id)) {
      return "Following";
    } else {
      return "Follow";
    }
  }

  followCssClass(id){
    if (this.followStatus(id)) {
      return "unfollowed-button";
    } else {
      return "followed-button";
    }
  }

  followAction(id){
    if (this.followStatus(id)) {
      this.props.destroyFollow(id);
    } else {
      this.props.createFollow(id);
    }
  }

  render() {
    const suggestions = this.props.suggestedUsers.map( user =>
        <div className="suggested-user" key={user.id}>
          <span className="suggested-text" onClick={() => this.navigateUserShow(user.id)}>{user.username}</span>
        </div>
      );


    return (
      <div className="suggested-container">
        <span className="suggested-title">Suggested Users</span>
        {suggestions}
      </div>
    );
  }
}

export default SuggestedUsers;
