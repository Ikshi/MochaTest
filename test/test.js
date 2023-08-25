const assert = require('chai').assert;
const sayHello = require('../index').sayHello;


let result = sayHello();

describe('Testing the app', function(){

    describe ('The result value', function(){
        it('App should return hello', function(){
            assert.equal(result, 'hello');
        });
        
    });
    describe('The type of the result', function(){
        it('sayHello should be a string', function(){
            assert.typeOf(result, 'string');
        });
    });
});


