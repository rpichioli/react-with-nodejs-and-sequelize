import React from 'react';
import classnames from 'classnames';

class BandForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			year: '',
			loading: false
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {

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

				<h4 class="ui dividing header">Fill the form below with the band information</h4>

				<div className="field">
					<label for="title">Title</label>
					<input
						type="text"
						name="title"
						id="title"
						value={this.state.title}
						className="ui input"
						placeholder="The name of the band"
						onChange={this.handleChange}
					/>
				</div>
				<div className="field">
					<label for="year">Year</label>
					<input
						type="text"
						name="year"
						id="year"
						value={this.state.year}
						className="ui input"
						placeholder="Foundation year"
						onChange={this.handleChange}
					/>
				</div>
				<div className="field">
					<button type="submit" className="ui primary button">Save</button>
				</div>
			</form>
		);
	}
}

export default BandForm;
