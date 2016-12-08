import React from 'react';
import { Link, hashHistory } from 'react-router';

class SuggestedUsers extends React.Component {
	constructor(props) {
		super(props);


    this.state = {toggle: false};

    this.navigateUserShow = this.navigateUserShow.bind(this);
    this.checkUser = this.checkUser.bind(this);
    this.followAction = this.followAction.bind(this);
    // this.followStatus = this.followStatus.bind(this);
	}

  navigateUserShow(id) {
    hashHistory.push(`/user/${id}`);
  }

  checkUser(id, follows){
    if (this.props.currentUser.id !== id) {
      return(
        <span className={ this.followCssClass(id, follows) }
          onClick={() => this.followAction(id, follows)}>{ this.followText(id, follows) }
        </span>
      );
    }
  }

  // followStatus(id){
  //   const followings_ids = [];
  //   this.props.currentUser.followings.forEach(user => {
  //     followings_ids.push(user.id);
  //   }
  //   );
  //
  //   if (followings_ids.includes(id)) {
  //     return true;
  //   }
  //   return false;
  // }

  followText(id, follows) {
    if (follows) {
      return "Following";
    } else {
      return "Follow";
    }
  }

  followCssClass(id, follows){
    if (follows) {
      return "unfollowed-button";
    } else {
      return "followed-button";
    }
  }

  followAction(id, follows){
    if (follows) {
      this.props.destroyFollow(id);
    } else {
      this.props.createFollow(id);
    }

    this.props.requestSuggestedUsers();
    this.props.requestPosts();
  }

  render() {
    const suggestions = this.props.suggestedUsers.map( user =>
        <div className="suggested-user" key={user.id}>
          <span className="suggested-text" onClick={() => this.navigateUserShow(user.id)}>{user.username}</span>
          {this.checkUser(user.id, user.follows_specific)}
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
