const Mocha = require('mocha')
const assert = require('assert');
const mocha = new Mocha()

mocha.suite.emit('pre-require', this, 'solution', mocha)

function solution (array) {
    return permute(array);
}

function permute(array) {
    const result = [];
    const len = array.length;

    if (len === 1) {
        return [array.slice()];
    }

    for (const i of array) {
        let token = array.shift();

        let perms = permute(array);

        for (const perm of perms) {
            perm.push(token);
        }

        perms.forEach((perm) => {
            result.push(perm);
        });

        array.push(token);
    }

    return result;
}

describe('# tests for Permutation', () => {

    it('it should be ...',() => {
        const array = [1,2,3]
        const s = solution(array);
        console.log(s)
        // assert.equal(s, true);
    })
})
