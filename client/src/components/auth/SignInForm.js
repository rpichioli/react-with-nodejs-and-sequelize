import React from 'react';
import classnames from 'classnames';

class SignInForm extends React.Component {
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
		);
	}
}

export default SignInForm;
