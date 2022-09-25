const Mocha = require('mocha')
const assert = require('assert');
const mocha = new Mocha()

mocha.suite.emit('pre-require', this, 'solution', mocha)

function solution(array) {
    let result = [];
    let aux = [];
    let map = {};
    map.r = result
    map.a = aux
    map.s = array
    Hanoi(array.length,  map.s, map.r, map.a, map);
    // console.log(array)
    // console.log(result)
    // console.log(aux)
    return result;
}

function Hanoi(n, from, to, via, m) {
    m.i = n
    console.log(m)
    if (n === 0) return;
    Hanoi(n - 1, from, via, to, m);
    to.push(from.pop());    
    Hanoi(n - 1, via, to, from, m);
}

describe('# tests for Combination', () => {

    it('it should be ...', () => {
        const array = [5, 4, 3, 2, 1]
        const s = solution(array);
        console.log(s)

        // assert.equal(s, true);
    })
})

