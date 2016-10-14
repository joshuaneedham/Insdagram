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
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  renderUsers(){
    const that = this;
    if (this.props.searchUsers.length > 0) {
      return this.props.searchUsers.map((user) => {
        return <li key={user.id}>{user.username}</li>;
      });
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
        <ul>{ this.renderUsers() }</ul>
      </div>
    );
  }
}

export default Search;
