const Mocha = require('mocha')
const assert = require('assert');
const mocha = new Mocha()

mocha.suite.emit('pre-require', this, 'solution', mocha)

function solution (array) {
    let result = [];

    return result;
}

describe('# tests for Jigsaw', () => {

    it('it should be ...',() => {
        const array = [1,2,1,2,1,2,1]
        const s = solution(array);
        
        assert.equal(s, true);
    })
})
