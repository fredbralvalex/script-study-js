const Mocha = require('mocha')
const assert = require('assert');
const mocha = new Mocha()

mocha.suite.emit('pre-require', this, 'solution', mocha)

function solution (array) {
    let result = [];
    const len = array.length;
    if (len < 2) {
        return []
    }
    let count = 1;
    let idx = 0
    while(count < len - 1) {
        const isZigZag = array[count - 1] < array[count] && array[count] > array[count + 1]
            || array[count - 1] > array[count] && array[count] < array[count + 1];

        result[idx] = isZigZag ? 1 : 0;
        idx++;
        count++;
    }
    return result;
}

describe('# tests for Zig Zag', () => {

    it('it should be zig zag',() => {
        const array = [1,2,1,2,1,2,1]
        const s = solution(array);
        
        assert.equal(s.toString(), [1,1,1,1,1].toString());
    })

    it('it should not be zz',() => {
        const array = [1,2,1,3,4]
        const s = solution(array);
        
        assert.equal(s.toString(), [1,1,0].toString());
    })

    it('it should not be zz 2',() => {
        const array = [1,2,3,4]
        const s = solution(array);
        
        assert.equal(s.toString(), [0,0].toString());
    })

    it('it should not be zz 3',() => {
        const array = [100000,10000,10000]
        const s = solution(array);
        
        assert.equal(s.toString(), [0].toString());
    })
})
