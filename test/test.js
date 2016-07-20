var request = require('supertest');

var app = require('../app.js');

describe('GET /' , function () {

	it('' , function(done) {
		
		request(app).get('/').expect('hello world' , done);
		
	});
	
	
});