import staticBands from '../../data/bands';

export function getByID(id) {
	let isValid = false;
	let error = "";

	// Find the band in the provisory data static object
	let band = staticBands.find(band => band.id == id);
	// Verify if has returned valid object
	if (band) {
		return { isValid: true, error: error, band: band }
	} else {
		return { isValid: false, error: "Band not found", band: {}}
	}
}
