import React from 'react';
import { connect } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { addAlbum, updateAlbum } from '../../../actions/albums';

class AlbumForm extends React.Component {
	state = {
		id: this.props.album ? this.props.album.id : null,
		title: this.props.album ? this.props.album.title : '',
		description: this.props.album ? this.props.album.description : '',
		cover: this.props.album ? this.props.album.cover : '',
		year: this.props.album ? this.props.album.year : '',
		band_id: this.props.match.params.id, //this.props.album ? this.props.album.band_id : '',
		errors: {},
		loading: false,
		redirect: false
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
			this.setState({ loading: true }); // Set up the loading
			const { id, title, year, description, cover, band_id } = this.state;
			if (id && id > 0)
				this.props.updateAlbum({ id, title, year, description, cover, band_id }).then(() => this.setState({ redirect: true }));
			else
				this.props.addAlbum({ title, year, description, cover, band_id }).then(() => this.setState({ redirect: true }));
		}
	}

	render() {
		return (
			<div>
				{
					// Redirect if some action has worked succesfully, render if not
					this.state.redirect ?
						<Redirect to={`/band/${this.props.match.params.id}/albums`} /> :
						<div className="ui container">
							<h1>Album Registration</h1>
							<NavLink exact to={`/band/${this.props.match.params.id}/albums`} className="ui button">Back to albums list</NavLink>
							<br /><br />

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
										style={{height: '115px'}}
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
						</div>
				}
			</div>
		)
	}
}

AlbumForm.propTypes = {
	updateAlbum: PropTypes.func.isRequired,
	addAlbum: PropTypes.func.isRequired
};

function mapStateToProps(state, props) {
	if (props.match.params && props.match.params.id > 0) {
		const band = state.bands.find(item => item.id == props.match.params.id);
		const album = band ? band.albums.find(item => item.id == props.match.params.album_id) : null;
		return { album: album };
	}

	return { album: null };
}

export default connect(mapStateToProps, { addAlbum, updateAlbum })(AlbumForm);
