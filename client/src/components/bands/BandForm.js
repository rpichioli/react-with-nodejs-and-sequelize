import React from 'react';
import classnames from 'classnames';

class BandForm extends React.Component {
	state = {
		title: '',
		year: '',
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

				<h4 class="ui dividing header">Fill with the band information</h4>

				<div className="field">
					<label for="title">Title</label>
					<input className="ui input" onChange={this.handleChange} name="title" id="title" type="text" placeholder="The name of the band" />
				</div>
				<div className="field">
					<label for="year">Year</label>
					<input className="ui input" onChange={this.handleChange} name="year" id="year" type="text" placeholder="Foundation year" />
				</div>
				<div className="field">
					<button type="submit" className="ui primary button">Save</button>
				</div>
			</form>
		);
	}
}

export default BandForm;
