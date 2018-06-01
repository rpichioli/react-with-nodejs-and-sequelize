-import React from 'react';
import classnames from 'classnames';

class LogIn extends React.Component {
	state = {
		identifier: '',
		password: '',
		errors: {},
		loading: false
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		let errors = {};

		if (this.state.identifier == '') errors.identifier = 'This field can\'t be empty';
		if (this.state.password == '') errors.password = 'This field can\'t be empty';

		if (Object.keys(errors).length == 0) {

		} else {
			this.setState({ errors });
		}
	}

	render() {
		return (
			<div>
				<h1>Log In</h1>
				<form className={classnames('ui', 'form', { loading: this.state.loading })} onSubmit={this.handleSubmit}>

					<h4 class="ui dividing header">Fill with your credentials to log in</h4>

					<div className="field">
						<label for="identifier">Identifier</label>
						<input className="ui input" onChange={this.handleChange} name="identifier" id="identifier" type="text" placeholder="Username or e-mail" />
					</div>
					<div className="field">
						<label for="password">Password</label>
						<input className="ui input" onChange={this.handleChange} name="password" id="password" type="password" placeholder="Password" />
					</div>
					<div className="field">
						<button type="submit" className="ui primary button">Send</button>
					</div>
				</form>
			</div>
		);
	}
}

export default LogIn;
