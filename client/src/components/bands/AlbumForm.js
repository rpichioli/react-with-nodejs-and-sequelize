import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class AlbumForm extends React.Component {
	state = {
		id: '',
		title: '',
		description: '',
		cover: '',
		year: '',
		errors: {},
		loading: false
	}

	componentDidMount = () => {
		const album = this.props.album;
		this.setState({
			id: album ? album.id : '',
			title: album ? album.title : '',
			description: album ? album.description : '',
			cover: album ? album.cover : '',
			year: album ? album.year : ''
		})
	}

	componentWillReceiveProps = (nextProps) => {
		this.setState({
			id: nextProps.id,
			title: nextProps.title,
			description: nextProps.description,
			cover: nextProps.cover,
			year: nextProps.year
		})
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSubmit = (e) => {
		e.preventDefault();

		// Validation --------------------------------------------------
		let errors = {};
		if (this.state.title === '') errors.title = "This field can't be empty";
		if (this.state.year === '') errors.year = "This field can't be empty";
		if (this.state.cover === '') errors.cover = "This field can't be empty";

		// Fill the error state
		this.setState({ errors });
		// -------------------------------------------------------------

		// Build the valid logic key by errors object
		if (Object.keys(errors).length === 0) {
			this.setState({ loading: true }); // Set up the loading
			this.props.saveAlbum(this.state); // Send the state to the parent component save function
		}
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

				<div className={classnames("field", { error: !!this.state.errors.description })}>
					<label htmlFor="description">Description</label>
					<textarea
						id="description" name="description"
						className="ui input"
						placeholder="The band summary"
						onChange={this.handleChange}
						value={this.state.description}
					></textarea>
					<span>{this.state.errors.description}</span>
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
					{this.state.cover !== '' && <img src={this.state.cover} alt="cover" className="ui small bordered image" />}
				</div>

				<div className="field">
					<button type="submit" className="ui primary button">Save</button>
				</div>
			</form>
		)
	}
}

AlbumForm.propTypes = {
	album: PropTypes.object.isRequired,
	saveAlbum: PropTypes.func.isRequired
}

export default AlbumForm;
