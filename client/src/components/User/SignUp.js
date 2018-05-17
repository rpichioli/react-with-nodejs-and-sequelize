import React from 'react';

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
		return (
			<div>
				<h1>Sign Up</h1>
				<p>Coming soon..</p>
			</div>
		);
	}
}

export default SignUp;
