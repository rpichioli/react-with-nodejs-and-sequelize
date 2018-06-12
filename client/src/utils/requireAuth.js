import React from 'react';
import PropTypes from 'prop-types';

/**
 * Protect client-side Routes with HOC (Higher Order Component)
 * @return {[type]} [description]
 */
export default (ComposedComponent) => {
	class Authenticate extends React.Component {
		componentWillMount() {
			if (!this.props.isAuthenticated) {
				this.props.history.push('/login');
			}
		}

		componentWillUpdate(nextProps) {
			if (!nextProps.isAuthenticated) {
				this.props.history.push('/login');
			}
		}

		render() {
			return (
				<ComposedComponent {...this.props} />
			);
		}
	}

	Authenticate.propTypes = {
		isAuthenticated: PropTypes.bool.isRequired
	}
}
