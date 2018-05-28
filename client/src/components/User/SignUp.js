import React from 'react';
import classnames from 'classnames';

class SignUp extends React.Component {
	state = {
		username: '',
		password: '',
		errors: {},
		loading: false
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
	}

	render() {
		// id int(11) AI PK
		// name varchar(150)
		// email varchar(300)
		// username varchar(100)
		// password text
		// status enum('A','C')
		return (
			<div>
				<h1>Sign Up</h1>
				<form className={classnames('ui','form', { loading: this.state.loading })} onSubmit={this.handleSubmit}>

					<h4 className="ui dividing header">Register here to access our restrict area and private content</h4>

					{!!this.state.errors.global && <div className="ui negative message"><p>{this.state.errors.global}</p></div>}

					<div className={classnames("field", { error: !!this.state.errors.name })}>
						<label htmlFor="name">Name</label>
						<input
							id="name" name="name" type="text" className="ui input" placeholder="Your complete name"
							value={this.state.name} onChange={this.handleChange}
						/>
						<span>{this.state.errors.name}</span>
					</div>

					<div className={classnames("field", { error: !!this.state.errors.email })}>
						<label htmlFor="email">E-mail</label>
						<input
							id="email" name="email" type="text" className="ui input" placeholder="Your personal main e-mail"
							value={this.state.email} onChange={this.handleChange}
						/>
						<span>{this.state.errors.email}</span>
					</div>

					<div className={classnames("field", { error: !!this.state.errors.username })}>
						<label htmlFor="username">Username</label>
						<input
							id="username" name="username" type="text" className="ui input" placeholder="Your username"
							value={this.state.username} onChange={this.handleChange}
						/>
						<span>{this.state.errors.username}</span>
					</div>

					<div className={classnames("field", { error: !!this.state.errors.password })}>
						<label htmlFor="password">Password</label>
						<input
							id="password" name="password" type="password" className="ui input"
							value={this.state.password} onChange={this.handleChange}
						/>
						<span>{this.state.errors.password}</span>
					</div>

					<div className="field">
						<button type="submit" className="ui primary button">Save and Log In</button>
					</div>
				</form>
			</div>
		);
	}
}

export default SignUp;
