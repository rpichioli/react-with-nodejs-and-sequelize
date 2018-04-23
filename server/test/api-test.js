const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;   // TDD
const should = chai.should(); // BDD
const expect = chai.expect(); // BDD
const server = require('../index'); // NodeJS server app (test environment!)

chai.use(chaiHttp);

describe('Bands', () => {
	describe('GET /api/bands', () => {
		it('Get all bands', () => {
			return chai
				.request(server)
				.get('/api/bands')
				.then(res => {
					res.should.have.status(200);
					res.should.be.json;
					res.body.should.be.an('object');
					res.body.should.have.property('success');
					res.body.should.have.property('bands');
					res.body.success.should.eql(true);
					res.body.bands.should.not.be.empty;
				})
				.catch(err => {
					err.should.have.status(400);
					err.body.should.have.property('error');
					err.body.error.should.eql('Any band found.');
				});
		});
		it('Get specific band by ID', () => {
			return chai
				.request(server)
				.get('/api/bands/1')
				.then(res => {
					res.should.have.status(200);
					res.should.be.json;
					res.body.should.be.an('object');
					res.body.should.have.property('success');
					res.body.should.have.property('band');
					res.body.success.should.eql(true);
					res.body.band.should.not.be.empty;
				})
				.catch(err => {
					err.should.have.status(400);
					err.body.should.have.property('success');
					err.body.should.have.property('error');
					err.body.should.have.property('band');
					err.body.success.should.eql(false);
					err.body.error.should.eql('Band not found.');
					err.body.band.should.be.empty;
				})
		});
	});
});
describe('Albums', () => {
	describe('GET /api/albums', () => {
		it('Get album by ID', () => {
			return chai
				.request(server)
				.get('/api/albums/1')
				.then(res => {
					res.should.have.status(200);
					res.should.be.json;
					res.body.should.be.an('object');
					res.body.should.have.property('success');
					res.body.should.have.property('album');
					res.body.success.should.eql(true);
					res.body.album.should.not.be.empty;
				})
				.catch(err => {
					err.should.have.status(400);
					err.body.should.have.property('success');
					err.body.should.have.property('error');
					err.body.success.should.eql(false);
					err.body.error.should.eql('Album not found.');
				})
		});
	});
});
