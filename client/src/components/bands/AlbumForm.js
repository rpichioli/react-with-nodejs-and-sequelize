import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

/**
 * @description Album form used to add and edit. This time we will use state and events binding without a constructor.
 * @extends React
 */
class AlbumForm extends React.Component {
	state = {
		id: this.props.album ? this.props.album.id : null,
		title: this.props.album ? this.props.album.title : '',
		description: this.props.album ? this.props.album.description : '',
		cover: this.props.album ? this.props.album.cover : '',
		year: this.props.album ? this.props.album.year : '',
		band_id: this.props.album ? this.props.album.band_id : '',
		errors: {},
		loading: false
	}

	componentWillReceiveProps = (nextProps) => {
		this.setState({
			id: nextProps.id,
			title: nextProps.title,
			description: nextProps.description,
			cover: nextProps.cover,
			year: nextProps.year,
			band_id: nextProps.band_id
		})
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSubmit = (e) => {
		e.preventDefault();
		let errors = {};

		// Validation
		if (this.state.title === '') errors.title = "This field can't be empty";
		if (this.state.year === '') errors.year = "This field can't be empty";
		if (this.state.cover === '') errors.cover = "This field can't be empty";

		// Fill the errors object state
		this.setState({ errors });

		// Proceed if everything is OK
		if (Object.keys(errors).length === 0) {
			console.log(this.state);
			console.log(this.props);
			this.setState({ loading: true }); // Set up the loading
			this.props.saveAlbum(this.state); // Send the state to the parent component save function
		}
	}

	render() {
		return (
			<form className={classnames('ui', 'form', { 'loading': this.state.loading })} onSubmit={this.handleSubmit}>
				<h4 className="ui dividing header">Fill the form below with the album information</h4>

				{!!this.state.errors.global && <div className="ui negative message"><p>{this.state.errors.global}</p></div>}

				<div className={classnames("field", { error: !!this.state.errors.title })}>
					<label htmlFor="title">Title</label>
					<input
						id="title" name="title"
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
						id="year" name="year"
						value={this.state.year}
						className="ui input"
						placeholder="The album year"
						onChange={this.handleChange}
					/>
					<span>{this.state.errors.title}</span>
				</div>

				<div className={classnames("field", { error: !!this.state.errors.description })}>
					<label htmlFor="description">Description</label>
					<textarea
						id="description" name="description"
						value={this.state.description}
						className="ui input"
						placeholder="The band summary"
						onChange={this.handleChange}
					></textarea>
					<span>{this.state.errors.description}</span>
				</div>

				<div className={classnames("field", { error: !!this.state.errors.cover })}>
					<label htmlFor="cover">Cover URL</label>
					<input
						id="cover" name="cover"
						value={this.state.cover}
						className="ui input"
						placeholder="The album cover URL"
						onChange={this.handleChange}
					/>
					<span>{this.state.errors.title}</span>
				</div>

				<div className="field">
					{this.state.cover !== '' && <img src={this.state.cover} alt="cover" className="ui small bordered image" />}
				</div>

				<div className="field">
					<button type="submit" className="ui primary button">Save</button>
				</div>
			</form>
		)
	}
}

// AlbumForm.propTypes = {
// 	album: PropTypes.object,
// 	saveAlbum: PropTypes.func.isRequired
// }

export default AlbumForm;
