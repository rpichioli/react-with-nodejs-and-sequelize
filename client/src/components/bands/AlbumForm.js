import React from 'react';
import classnames from 'classnames';

class AlbumForm extends React.Component {
	state = {
		id: '',
		band_id: '',
		title: '',
		year: '',
		cover: '',
		description: '',
		errors: {},
		loading: false
	}

	handleSubmit(e) {
		e.preventDefault();
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });

		// Validation --------------------------------------------------
		let errors = {};
		if (this.state.title === '') errors.title = "This field can't be empty";
		if (this.state.year === '') errors.year = "This field can't be empty";
		if (this.state.cover === '') errors.cover = "This field can't be empty";

		// Fill the error state
		this.setState({ errors });
		// -------------------------------------------------------------
	}

	render() {
		return (
			<form class={classnames('ui', 'form', { 'loading': this.state.loading })} onSubmit={this.handleSubmit}>
				<h4 className="ui dividing header">Fill the form below with the album information</h4>

				{!!this.state.errors.global && <div className="ui negative message"><p>{this.state.errors.global}</p></div>}

				<div className={classnames("field", { error: !!this.state.errors.title })}>
					<label htmlFor="title">Title</label>
					<input
						type="text" id="title" name="title"
						value={this.state.title}
						className="ui input"
						placeholder="The album title"
						onChange={this.handleChange}
					/>
					<span>{this.state.errors.title}</span>
				</div>
				<div className={classnames("field", { error: !!this.state.errors.year })}>
					<label htmlFor="year">Year</label>
					<input
						type="text" id="year" name="year"
						value={this.state.year}
						className="ui input"
						placeholder="The album year"
						onChange={this.handleChange}
					/>
					<span>{this.state.errors.title}</span>
				</div>
				<div className={classnames("field", { error: !!this.state.errors.cover })}>
					<label htmlFor="cover">Cover URL</label>
					<input
						type="text" id="cover" name="cover"
						value={this.state.cover}
						className="ui input"
						placeholder="The album cover URL"
						onChange={this.handleChange}
					/>
					<span>{this.state.errors.title}</span>
				</div>
				<div className="field">
					<button type="submit" className="ui primary button">Save</button>
				</div>
			</form>
		)
	}
}

export default AlbumForm;
