import React from 'react';
import { Link, hashHistory } from 'react-router';

class SuggestedUsers extends React.Component {
	constructor(props) {
		super(props);

    this.navigateUserShow = this.navigateUserShow.bind(this);
	}

  navigateUserShow(id) {
    hashHistory.push(`/user/${id}`);
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
