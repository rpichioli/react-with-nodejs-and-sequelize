const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const should = chai.should();
const expect = chai.expect();

chai.use(chaiHttp);

describe('Bands', function() {
	describe('GET /api/bands', function() {
		it('Get all bands perfectly', function() {
			return chai
				.request('http://localhost:8080') //app
				.get('/api/bands')
				.then(res => {
					res.should.have.status(200);
					res.should.be.json;
					res.body.should.be.an('object');
					res.body.should.have.property('bands');
				})
				.catch(err => {
					console.log(err);
					err.should.have.status(400);
					err.body.should.have.property('error');
					err.body.error.should.eql('Any band found.');
				});
		});
	});
});
