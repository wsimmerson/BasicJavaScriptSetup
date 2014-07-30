var should = require('chai').should(),
    app = require('../app');

describe('app.js', function() {

    it('should return "Hello World"', function() {
        app().should.equal("Hello World");
    });

});
