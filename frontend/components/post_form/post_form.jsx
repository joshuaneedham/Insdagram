import React from 'react';
import { withRouter } from 'react-router';
const hashHistory = require('react-router').hashHistory;

class PostForm extends React.Component{
  constructor(props){
    super(props);
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

  render() {
    return (
        <div className="new-post-container">
          <div className="new-post-form">
            <h3 className="new-post-title">Upload</h3>

            <form onSubmit={this.handleSubmit}>

              <div className="choose-file-holder">
                <input type="file"
                  onChange={this.updateFile}
                  className="post-field choose-file-button"/>
                <div className="choose-file-mask">Choose File
                </div>
              </div>

              <img className="upload" src={this.state.imageURL} />

              <textarea
                placeholder="caption"
                value={this.state.caption}
                onChange={this.update("caption")}
                className="post-field caption-field"/>

              <div className="button-holder">
                <input type="submit"
                  value="Post"
                  className="new-post-button create-post-button"/>
              </div>
            </form>

            <div className="button-holder">
              <button className="new-post-button cancel-button"
                onClick={this.navigateToSearch}>Cancel</button>
            </div>
          </div>
        </div>
    );
  }
}

export default withRouter(PostForm);
