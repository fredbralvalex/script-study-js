const Mocha = require('mocha')
const assert = require('assert');
const mocha = new Mocha()

mocha.suite.emit('pre-require', this, 'solution', mocha)

const PER = 3
function solution (str) {
    let result = [];
    const arr = Array.from(str);
    const len = arr.length;
    let p1,p2,p3 = '';
    const maxLen = (len - (len%PER))/PER + len%PER;
    let comb = []
    console.log(maxLen);
    
    for (let i = 1; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            for (let k = i + j; k < len; k++) {
                console.log('%s : %s : %s', `${0}-${i}`, `${i}-${j}` ,`${k}-${len}`)
            }
        }
    }
    /*
                p1 = arr.slice(0, i);
            p2 = arr.slice(i, j);

            p3 = arr.slice(j, len);
            comb.push([p1,p2,p3].join(''));
            // console.log(p1,p2,p3)
    */

    console.log(comb);

    return result;
}

describe('# tests for split String', () => {

    it('it should be ...',() => {
        const str = "xzxzx";
        const s = solution(str);
        
        assert.equal(s, true);
    })
})
