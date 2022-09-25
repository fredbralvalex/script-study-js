const Mocha = require('mocha')
const assert = require('assert');
const mocha = new Mocha()

mocha.suite.emit('pre-require', this, 'solution', mocha)

class StairSteps {

    solution(str) {
      let result = []
      let arr = Array.from(str)
      this.removeSteps(arr, [], result)
      return result
    }

    removeSteps(arr, combination, result) {
        const len = arr.length
        for (let i = 0; i < len; i++) {
            // from 1 to n
            this.removeStep(arr.slice(0, i + 1), arr, combination, result)    
        }         
    }

    removeStep(newly, oldly, combination, result) {
        const rest = oldly.length - newly.length
        if (rest < 0) {
            // is not a combination
            return
        } else if (rest === 0) {
            result.push([...combination, newly])
        } else {
            return this.removeSteps(oldly.slice(newly.length),[...combination, newly], result)
        }
    }
}


describe('# tests for StairSteps', () => {


    it('solution 1 it should be equals',() => {
        const stair = new StairSteps()
        const result = stair.solution('x')
        assert.strictEqual(JSON.stringify(result), '[[["x"]]]')
    })
    it('solution 2 it should be equals',() => {
        const stair = new StairSteps()
        const result = stair.solution('xy')
        assert.strictEqual( JSON.stringify(result), '[[["x"],["y"]],[["x","y"]]]')
    })
    it('solution 3 it should be equals',() => {
        const stair = new StairSteps()
        const result = stair.solution("xyx")
        assert.strictEqual( JSON.stringify(result), '[[["x"],["y"],["x"]],[["x"],["y","x"]],[["x","y"],["x"]],[["x","y","x"]]]')
    })
})


module.exports = StairSteps