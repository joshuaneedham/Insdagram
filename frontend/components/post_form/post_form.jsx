import React from 'react';
import { withRouter } from 'react-router';

class PostForm extends React.Component{
  constructor(props){
    super(props);
    // this.coords = {lat: props.lat, lng: props.lng};
    this.state = {
      caption: "",
      picture_url: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToSearch = this.navigateToSearch.bind(this);
  }

  navigateToSearch() {
    this.props.router.push("/");
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    const post = Object.assign({}, this.state);
    // const post = Object.assign({}, this.state, this.coords);
    this.props.createPost({post});
    this.navigateToSearch();
  }

  render() {
    return (
        <div className="new-post-container">
          <div className="new-post-form">
            <h3 className="new-post-title">Create A Post!</h3>

            <form onSubmit={this.handleSubmit}>
              <label className="post-field">Caption</label>
              <input type="text" value={this.state.caption}
                onChange={this.update("caption")} className="post-field"/>

              <label className="post-field">Picture URL</label>
              <input type="text" value={this.state.picture_url}
                onChange={this.update("picture_url")} className="post-field"/>

              <div className="button-holder">
                <input type="submit" value="Create Post" className="new-post-button"/>
              </div>
            </form>

            <div className="button-holder">
              <button className="new-post-button" onClick={this.navigateToSearch}>Cancel</button>
            </div>
          </div>
        </div>
    );
  }
}

export default withRouter(PostForm);
