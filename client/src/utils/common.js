/**
 * @description Used as callback, this function compares a with b and order them based in a specified field, using bracket notation
 * @param {object} a
 * @param {object} b
 * @param {string} field - The object property used to comparison
 * @return {int}
 */
export function sortArrayByField (a, b, field) {
	if (a[field] > b[field]) return 1;
	if (a[field] < b[field]) return -1;
	return 0; // a == b
}
