import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };

    this.update = this.update.bind(this);
    this.renderUsers = this.renderUsers.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.searchCssClass = this.searchCssClass.bind(this);
    this.userShow = this.userShow.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  userShow(e){
    const userValue= e.currentTarget.value;
    hashHistory.push(`/user/${userValue}`);
    this.setState({ username: "" });
  }

  renderUsers(){
    const that = this;
    if (this.props.searchUsers.length > 0) {
      return this.props.searchUsers.map((user) => {
        return <li className="list-item"
                  key={user.id}
                  onClick={this.userShow}
                  value={user.id}>
                <div className="list-item-cat list-item-username">
                  { user.username}
                </div>
                <div className="list-item-cat list-item-full-name">
                  { user.full_name }
                </div>
              </li>;
      });
    }
  }

  searchCssClass() {
    if (this.props.searchUsers.length > 0) {
      return "search-results";
    } else {
      return "blank-class";
    }
  }

  handleChange(e){
    e.preventDefault();
    const that = this;
    this.setState({ username: e.currentTarget.value });
    that.props.requestUsers(this.state.username);
  }

  render() {
    return (
      <div className="user-search-container">
        <input className="user-search"
          type="search"
          onChange={this.handleChange}
          value={this.state.username}
          placeholder="Search" />
        <ul className={this.searchCssClass()}>{ this.renderUsers() }</ul>
      </div>
    );
  }
}

export default Search;
