import React from 'react';
import { withRouter } from 'react-router';
const hashHistory = require('react-router').hashHistory;

class PostForm extends React.Component{
  constructor(props){
    super(props);
    // this.coords = {lat: props.lat, lng: props.lng};
    this.state = {
      caption: "",
      imageFile: "",
      imageUrl: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToSearch = this.navigateToSearch.bind(this);
    this.update = this.update.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  navigateToSearch() {
    this.props.router.push("/");
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

// problem area
  updateFile(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }.bind(this);

    if (file){
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e){
    e.preventDefault();
    let formData = new FormData();
    formData.append("post[caption]", this.state.caption);
    formData.append("post[image]", this.state.imageFile);
    this.props.createPost(formData, this.navigateToSearch);
  }
  // const post = Object.assign({}, this.state);
  // // const post = Object.assign({}, this.state, this.coords);
  // this.props.createPost({post});

  render() {
    return (
        <div className="new-post-container">
          <div className="new-post-form">
            <h3 className="new-post-title">Create A Post!</h3>

            <form onSubmit={this.handleSubmit}>

              <input type="text"
                placeholder="caption"
                value={this.state.caption}
                onChange={this.update("caption")}
                className="post-field"/>

              <input type="file"
                onChange={this.updateFile}
                className="post-field"/>

              <img src={this.state.imageURL} />

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
