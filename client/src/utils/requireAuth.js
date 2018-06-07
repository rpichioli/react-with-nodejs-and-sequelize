import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {} from 'react-router-dom';
//import { addFlashMessage } from '../actions/flashMessages';

/**
 * Protect Client-Side Routes with Higher Order Component
 * @return {[type]} [description]
 */
export default (ComposedComponent) => {
	class Authenticate extends React.Component {
		/**
		 * Função chamada antes de iniciar o componente
		 * Este recurso é um dos vários "life cycle hook" que o React provê para componentes
		 */
		componentWillMount() {
			// Se não está autenticado - Pega do state recebido do Redux mapeado para propriedade
			if (!this.props.isAuthenticated) {
				// Mensagem de acesso negado
				// this.props.addFlashMessage({
				// 	type: 'error',
				// 	text: 'You need to login to access this page'
				// });
				// Redireciona
				this.props.history.push('/login');
			}
		}

		/**
		 * Função chamada quando há alguma alteração nas propriedades do componente
		 * Mais um "life cycle hook"
		 */
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
		isAuthenticated: PropTypes.bool.isRequired //,
		//addFlashMessage: PropTypes.func.isRequired,
		//history: PropTypes.object.isRequired
	}

	// let mapStateToProps = (state) => {
	// 	return {
	// 		isAuthenticated: state.auth.isAuthenticated
	// 	}
	// }
	//
	// return connect(mapStateToProps, { addFlashMessage })(Authenticate);
}
