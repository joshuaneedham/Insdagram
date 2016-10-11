import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
		const comment = this.state;
		this.props.createComment({comment});
    this.setState({comment_text: ""});
  }

  render(){
    return (
      <form className="comment-form" onSubmit={this.handleSubmit}>
        <input type="text"
          className="comment-text-input"
          placeholder="Add a comment..."
          value={this.update.body}
          onChange={this.update("caption")} />

        <input className="comment-submit" type="submit" value="Comment" />
      </form>
    );
  }
}

export default CommentForm;
