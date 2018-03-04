import staticBands from '../../data/bands';
import models from '../../models';

export function findAll() {
	let isValid = false;
	let error = "";
	let Band = models.band;

	return Band.findAll().then(data => {
		console.log(data);
		if (data && Object.keys(data).length > 0)
			return { isValid: true, error: error, data: data };
		else
			return { isValid: isValid, error: "Any band found.", data: {} };
	})
}

export function findByID(id) {
	let isValid = false;
	let error = "";
	let Band = models.band;

	// Find the band in the provisory data static object
	//let band = staticBands.find(band => band.id == id);

	// Find band in database through model
	return Band.findById(id).then(band => {
		if (data)
			return { isValid: true, error: error, data: data };
		else
			return { isValid: isValid, error: "Band not found.", data: {} };
	})
}
