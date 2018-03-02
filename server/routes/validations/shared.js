import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export function validateID(data) {
	let errors = {};

	if (Validator.isEmpty(data.id)) {
		errors.message = "Invalid ID, must not be empty";
	} else if (Validator.isInt(data.id)) {
		errors.message = "Invalid ID, must be integer";
	} else if (Validator.data.id <= 0) {
		errors.message = "Invalid ID, must be bigger than 0";
	}

	return {
		errors,
		isValid: isEmpty(errors)
	}
}
