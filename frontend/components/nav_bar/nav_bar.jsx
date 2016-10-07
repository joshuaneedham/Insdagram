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
    	<hgroup className="nav-bar-group group">
    		<button className="header-logout-button" onClick={this.props.logout}>Log Out</button>
        <input className="user-search" type="search" placeholder="Search"/>
    	</hgroup>
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
        { this.checkLogIn() }
      </div>
    );
  }
}


export default NavBar;
