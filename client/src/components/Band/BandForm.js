import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import { fetchBand, updateBand, addBand } from '../../actions/bands';

/**
 * @description Band form used to add and edit. We bind state and events binding to the component by constructor this time.
 * @extends React
 */
class BandForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			id: '',
			title: '',
			year: '',
			description: '',
			errors: {},
			loading: false,
			redirect: false
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		if (this.props.match && this.props.match.params && typeof this.props.match.params.id !== "undefined") {
			this.props.fetchBand(this.props.match.params.id);
		}
		// this.setState({
		// 	id: (this.props.band) ? this.props.band.id : '',
		// 	title: (this.props.band) ? this.props.band.title : '',
		// 	year: (this.props.band) ? this.props.band.year : '',
		// 	description: (this.props.description) ? this.props.band.description : ''
		// });
	}

	componentWillReceiveProps = (nextProps) => {
		this.setState({
			id: nextProps.band.id,
			title: nextProps.band.title,
			year: nextProps.band.year,
			description: nextProps.band.description
		});
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		let errors = {};

		// Validation
		if (this.state.title === '') errors.title = "This field can't be empty";
		if (this.state.year === '') errors.year = "This field can't be empty";

		// Fill the errors object state
		this.setState({ errors });

		// Proceed if everything is OK
		if (Object.keys(errors).length === 0) {
			const { id, title, year, description } = this.state;
			this.setState({ loading: true });
			//this.props.saveBand({ id, title, year, description });

			if (!id)
				this.props.addBand({ title, year, description }).then(() => this.setState({ redirect: true }));
			else
				this.props.updateBand({ id, title, year, description }).then(() => this.setState({ redirect: true }));
		}
	}

	render() {
		return (
			<div>
				{
					// Redirect if some action has worked succesfully, render if not
					this.state.redirect ?
						<Redirect to="/bands" /> :
						<div className="ui container">
							<h1>Band Registration</h1>
							<NavLink exact to="/bands/" className="ui button">Back to bands list</NavLink>
							<br /><br />
							<form className={classnames("ui", "form", { loading: this.state.loading })} onSubmit={this.handleSubmit}>

								<h4 className="ui dividing header">Fill the form below with the band information</h4>

								{!!this.state.errors.global && <div className="ui negative message"><p>{this.state.errors.global}</p></div>}

								<div className={classnames("field", { error: !!this.state.errors.title })}>
									<label htmlFor="title">Title</label>
									<input
										type="text" id="title" name="title"
										value={this.state.title}
										className="ui input"
										placeholder="The name of the band"
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
										placeholder="Foundation year"
										onChange={this.handleChange}
									/>
									<span>{this.state.errors.year}</span>
								</div>

								<div className={classnames("field", { error: !!this.state.errors.description })}>
									<label htmlFor="description">Description</label>
									<textarea
										id="description" name="description"
										className="ui input"
										placeholder="The band summary"
										onChange={this.handleChange}
										value={this.state.description}
										style={{height: '115px'}}
									></textarea>
									<span>{this.state.errors.description}</span>
								</div>
								<div className="field">
									<button type="submit" className="ui primary button">Save</button>
								</div>
							</form>
						</div>
				}
			</div>
		);
	}
}

BandForm.propTypes = {
	band: PropTypes.object,
	fetchBand: PropTypes.func.isRequired,
	updateBand: PropTypes.func.isRequired,
	addBand: PropTypes.func.isRequired
};

function mapStateToProps(state, props) {
	if (props.match && props.match.params && props.match.params.id > 0) {
		return {
			band: state.bands.find(item => item.id == props.match.params.id)
		};
	}

	return { band: null };
}

export default connect(mapStateToProps, { fetchBand, updateBand, addBand })(BandForm);
