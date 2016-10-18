import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      displaySearch: false
    };

    this.update = this.update.bind(this);
    this.renderUsers = this.renderUsers.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.searchCssClass = this.searchCssClass.bind(this);
    this.userShow = this.userShow.bind(this);
    this.showList = this.showList.bind(this);
    this.hideList = this.hideList.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  userShow(e){
    const userValue= e.currentTarget.value;
    hashHistory.push(`/user/${userValue}`);
    this.setState({ username: ""});
  }

  renderUsers(){
    const that = this;
    if (this.props.searchUsers.length > 0) {
      return this.props.searchUsers.map((user) => {
        return <li className="list-item"
                  key={user.id}
                  onClick={this.userShow}
                  onBlur={this.props.clearSearchUsers}
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

  showList(){
    this.setState({ displaySearch: true });
  }

  hideList(){
    setTimeout(() => this.setState({ displaySearch: false }), 200);
  }

  render() {
    let listCssClass = "blank-class";

    if (this.state.displaySearch && this.props.searchUsers.length > 0){
      listCssClass = "search-results";
    } else {
      listCssClass = "blank-class";
    }

    return (
      <div className="user-search-container">
        <input className="user-search"
          type="search"
          onChange={this.handleChange}
          value={this.state.username}
          onFocus={this.showList}
          onBlur={this.hideList}
          placeholder="Search" />
        <ul className={listCssClass}>{ this.renderUsers() }</ul>
      </div>
    );
  }
}

export default Search;
