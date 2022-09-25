const Mocha = require('mocha')
const assert = require('assert');
const mocha = new Mocha()

mocha.suite.emit('pre-require', this, 'solution', mocha)

function solution (str) {
    const arr = Array.from(str);
    let result = [];
    combination(str, 0, [], 0, result);
    console.log(result)
    return result;
}

function combination(input, index, output, outLen, result) {
    if (input.length === index) {
        result.push(output.toString())
        return;
    }

    output[outLen] = input[index];
    output[outLen + 1] = ' ';

    combination(input, index + 1, output, outLen + 2, result);

    if (input.length != index + 1) {
        combination(input, index + 1, output, outLen + 1, result);
    }
}

describe('# tests for Combination', () => {

    it('it should be ...',() => {
        const str = "xzxz"
        const s = solution(str);
        
        // assert.equal(s, true);
    })
})
