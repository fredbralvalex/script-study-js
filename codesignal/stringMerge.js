const Mocha = require('mocha')
const assert = require('assert');
const mocha = new Mocha()

mocha.suite.emit('pre-require', this, 'solution', mocha)

function solution (string1, string2) {
    let result = [];
    let a1 = [...string1].reverse();
    let a2 = [...string2].reverse();
    let i1 = a1.pop(0)
    let i2 = a2.pop(0)

    while (i1 || i2) {      
      if (i1 && i2 && i1 < i2) {
        result.push(i1);
        i1 = a1.pop(0);
      } else if (i1 && i2 && i1 > i2) {
        result.push(i2);
        i2 = a2.pop(0);
      } else if (i1){
        result.push(i1);
        i1 = a1.pop(0);
      } else if (i2){
        result.push(i2);
        i2 = a2.pop(0);        
      }
    }

    // console.log(result)
    return result.join('');
}

describe('# tests for String merge', () => {

    it('it should be ...',() => {
        const string1 = 'sword';
        const string2 = 'tower';
        const s = solution(string1, string2);
        
        assert.equal(s.length , "swordtower".length);
        assert.equal(s.toString() , "swordtower");
    })
})
