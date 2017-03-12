let mocha = require('mocha');
let chai = require('chai');
let chaiHttp = require('chai-http');

let app = require('../routes');

chai.use(chaiHttp);
const expect = chai.expect;
const should = chai.should();

describe('UserRouter', () => {

	it('GetAllUser', () => {
		chai
			.request(app)
			.get('/api/user')
			.then(res => {
				expect(res.type)
					.to
					.eql('application/json');
				expect(res).to.be.json;
				expect(res.status)
					.to
					.equal(200);
			});
	});

});