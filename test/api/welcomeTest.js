const assert = require('chai').assert;
const app = require('../../assert')

//Asserting using Chai
describe('Welcome Test', function(){
    it('App should return welcome message', function(){
        assert.equal(app(), 'Welcome to QA course')
    })
})