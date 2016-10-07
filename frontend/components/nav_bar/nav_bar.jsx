import React from 'react';
import { Link } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.showHeader = this.showHeader.bind(this);
    this.checkLogIn = this.checkLogIn.bind(this);
  }

  showHeader(){
    return (
    	<div className="icons-group">
        <img
          src={insdagramAssets.addPhotoImage}
          className="icon" />
        <img
          src={insdagramAssets.userViewImage}
          className="icon" />
    		<img
          src={insdagramAssets.logoutButtonImage}
          className="header-logout-button icon"
          onClick={this.props.logout} />
      </div>
    );
  }

  checkLogIn() {
    if (this.props.currentUser) {
      return this.showHeader();
    } else {
      return ;
    }
  }

  render(){
    return (
      <div className="nav-container">
        <img className="official-logo" src={insdagramAssets.logoIcon} />
        <input className="user-search" type="search" placeholder="Search"/>
        { this.checkLogIn() }
      </div>
    );
  }
}


export default NavBar;
