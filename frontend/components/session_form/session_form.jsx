import React from 'react';
import { Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      full_name: "",
			username: "",
			password: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn(){
		if (this.props.loggedIn) {
			hashHistory.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm(user);
	}

  signUpFormText(){
    if (this.props.formType === "signup") {
      return (
        <div>
          <p>Sign up to see photos from your friends</p>
          <br/>
        </div>
      );
    }
  }

  signUpFormField(){
    if (this.props.formType === "signup") {
      return (
        <input type="text"
          value={this.state.full_name}
          onChange={this.update("full_name")}
          placeholder="Full Name"
          className="entry-input" />
      );
    }
  }

  toggleFormText(){
    if (this.props.formType === "login") {
      return "Don't have an account?";
    } else {
      return "Have an account?";
    }

  }

	navLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup">Sign Up</Link>;
		} else {
			return <Link to="/login">Log In</Link>;
		}
	}

<<<<<<< HEAD
  signupHeaderAdditionalText(){
    if (this.props.formType === "signup") {
      return (
        <p>Sign up to see photos from your friends</p>
      );
    }
  }

  signupHeaderAdditionalField(){
    if (this.props.formType === "signup") {
      return (
        <input type="text"
          placeholder = "Full Name"
          value={this.state.full_name}
          onChange={this.update("full_name")}
          className="login-input" />
      );
    }
  }

  submitButtonText(){
    if (this.props.formType === "login") {
      return "Login";
    } else {
      return "Sign Up";
    }
  }

  toggleSessionFormText(){
    if (this.props.formType === "login") {
      return "Don't have an account? ";
    } else {
      return "Have an account? ";
    }
=======
  submitButtonText(){
    return this.props.formType === "login" ? "Log in" : "Sign up";
>>>>>>> ee0223e910de69b87ffb3e5b44511d3e89ea4c5b
  }

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		return (
<<<<<<< HEAD
			<div className="session-form-container">
				<form onSubmit={this.handleSubmit} className="login-form-box">

          <h3 className="session-form-header">Insdagram</h3>
          { this.signupHeaderAdditionalText() }

					<div className="session-form">
            { this.signupHeaderAdditionalField() }
=======
			<div className="entry-form-container">
				<form onSubmit={this.handleSubmit} className="entry-form-box">
					<div className="entry-form">
            <h1>Insdagram</h1>
>>>>>>> ee0223e910de69b87ffb3e5b44511d3e89ea4c5b

            { this.signUpFormText() }
            { this.signUpFormField() }
						<br/>
<<<<<<< HEAD
							<input type="text"
                placeholder = "Username"
								value={this.state.username}
								onChange={this.update("username")}
								className="login-input" />

						<br/>
							<input type="password"
                placeholder= "Password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input" />

						<br/>
						<input type="submit"
              value={ this.submitButtonText() } />
=======
						<input type="text"
							value={this.state.username}
							onChange={this.update("username")}
              placeholder="Username"
							className="entry-input" />

						<br/>
						<input type="password"
							value={this.state.password}
							onChange={this.update("password")}
              placeholder="Password"
							className="entry-input" />

						<br/>
						<input type="submit" value={this.submitButtonText()} />
            { this.renderErrors() }
>>>>>>> ee0223e910de69b87ffb3e5b44511d3e89ea4c5b
					</div>

          <div>
            {this.toggleFormText()} {this.navLink()}
          </div>
				</form>

        <br/>
        <div className="session-form-">
          {this.toggleSessionFormText()}{this.navLink()}
        </div>

        { this.renderErrors() }
			</div>
		);
	}
}

export default SessionForm;
