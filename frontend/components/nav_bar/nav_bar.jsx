import React from 'react';
import { Link, hashHistory } from 'react-router';
import Search from './search';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.showHeader = this.showHeader.bind(this);
    this.handleUserShow = this.handleUserShow.bind(this);
  }

  handleUserShow(e) {
    this.props.requestUser(this.props.currentUser.id);
    hashHistory.push(`/user/${this.props.currentUser.id}`);
  }

  showHeader(){
    return (
    	<div className="icons-group">
        <img src={insdagramAssets.addPhotoImage}
          onClick={() => hashHistory.push("/postForm")}
          className="icon" />
        <img src={insdagramAssets.userViewImage}
          className="icon"
          onClick={this.handleUserShow} />
    		<img src={insdagramAssets.logoutButtonImage}
          className="header-logout-button icon"
          onClick={this.props.logout} />
      </div>
    );
  }

  componentDidUpdate(){
    if (!this.props.currentUser) {
      hashHistory.push("/login");
    }
  }

  render(){
    return (
      <div className="nav-container">
        <img className="official-logo"
          src={insdagramAssets.logoIcon}
          onClick={() => hashHistory.push("/")}/>
        <Search
          requestUsers={this.props.requestUsers}
          searchUsers={this.props.searchUsers}
          />
        { this.showHeader() }
      </div>
    );
  }
}

export default NavBar;
