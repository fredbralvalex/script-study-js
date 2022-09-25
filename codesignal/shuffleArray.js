const Mocha = require('mocha')
const assert = require('assert');
const mocha = new Mocha()

mocha.suite.emit('pre-require', this, 'solution', mocha)

function solution (arr) {
    let len = arr.length;
    let c = 0;
    let c1 = 0;
    let c2 = len - 1;
    let result = []
    let sorted = true;
  
    while(c1 <= c2) {
        result[c] = arr[c1];
        if (c + 1 < len) {
            result[c + 1] = arr[c2];            
        } 
        // console.log(result[c])
        // console.log(result[c + 1])
        c1++;
        c2--;
        c = c + 2;
    }

    for(let i = 1; i< len; i++) {
        sorted = sorted && result[i] > result[i - 1]
        // console.log(result[i - 1])
        // console.log(result[i])
    }
    console.log(sorted)
    console.log(result)
    return result;
}

describe('# tests for Shuffle array', () => {

    it('it should be OK',() => {
        const array = [-56, 32, 67, 45, -39];
        const s = solution(array);
        assert.equal(s.toString() , "-56,-39,32,45,67")
    })

    it('it should be OK2',() => {
        const array = [-56, 32, 67, 72, 45, -39];
        const s = solution(array);
        assert.equal(s.toString() , "-56,-39,32,45,67,72")
    })

    it('it should be NOK',() => {
        const array = [-56, 32, 16, 45, -39];
        const s = solution(array);
        assert.equal(s.toString() , "-56,-39,32,45,16")
    })

    it('it should be NOK2',() => {
        const array = [-56, 32, 67, 20, 45, -39];
        const s = solution(array);
        assert.equal(s.toString() , "-56,-39,32,45,67,20")
    })
})
