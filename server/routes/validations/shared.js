import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

/**
 * Testing shared validation, a simples positive and required integer
 * @param  {integer} data - The value to validate
 * @param  {string} label - The field name for the message
 * @return {object} Object which has errors and isValid contents
 */
export function validateInteger(data, label) {
	let errors = {};

	if (Validator.isEmpty(data.id)) {
		errors.message = `Invalid ${label}, must not be empty`;
	} else if (Validator.isInt(data.id)) {
		errors.message = `Invalid ${label}, must be integer`;
	} else if (Validator.data.id <= 0) {
		errors.message = `Invalid ${label}, must be bigger than 0`;
	}

	return {
		errors,
		isValid: isEmpty(errors)
	}
}
