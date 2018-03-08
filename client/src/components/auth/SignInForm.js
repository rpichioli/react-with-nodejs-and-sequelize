import React from 'react';
import classnames from 'classnames';

class SignUpPage extends React.Component {
	state = {
		identifier: '',
		password: '',
		loading: false
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
	}

	render() {
		return (
			<form className={classnames('ui', 'form', { loading: this.state.loading })} onSubmit={this.handleSubmit}>
				<div className="field">
					<label for="identifier">Identifier</label>
					<input className="ui input" type="text" name="identifier" id="identifier" placeholder="Username or e-mail" />
				</div>

				<div className="field">
					<label for="password">Password</label>
					<input className="ui input" type="password" name="password" id="password" placeholder="Password" />
				</div>

				<div className="field">
					<button type="submit" className="ui primary button">Send</button>
				</div>
			</form>
		);
	}
}

export default SignUpPage;
