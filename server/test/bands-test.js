const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect();
const assert = chai.assert();
const should = chai.should();

const server = require('../index');

describe('TDD for albuns API', function() {
	it('Test: Get all bands and respective albums ordered by year', function() {
		chai.request(server)
			.get('/api/bands')
			.end((err, res) => {
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.be.a('object');
				done();
			});
	});
});
