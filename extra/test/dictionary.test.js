
const Mocha = require('mocha')
const Dictionary = require('../dictionary')
const assert = require('assert');
const mocha = new Mocha()

mocha.suite.emit('pre-require', this, 'solution', mocha)

describe('# tests for Dictionary', () => {
    // it('',() => {
    //     const dict = new Dictionary(['cat', 'car', 'bar'])
    //     assert.equal(dict.isInDictionary('cap'), false)
    //     assert.equal(dict.isInDictionary('cat'), true)
    //     assert.equal(dict.isInDictionary('car'), true)
    //     assert.equal(dict.isInDictionary('bar'), true)
    //     assert.ok(dict.isInDictionary('cat'))
    // })
    let dict
    beforeEach(function () {
        dict = new Dictionary(['cat', 'car', 'bar'])
      });

    it('doesnt contains cap',() => {
        assert.equal(dict.isInDictionary('cap'), false)
    })

    it('contains cat',() => {
        assert.ok(dict.isInDictionary('cat'))
    })

    it('contains car',() => {
        assert.equal(dict.isInDictionary('car'), true)
    })

    it('contais bar',() => {
        assert.equal(dict.isInDictionary('bar'), true)
    })

    it('contais b*r',() => {
        assert.equal(dict.isInDictionary('b*r'), true)
    })

    it('contais *ar',() => {
        assert.equal(dict.isInDictionary('*ar'), true)
    })

    it('contais ca*',() => {
        assert.equal(dict.isInDictionary('ca*'), true)
    })
  })

mocha.run();