const Mocha = require('mocha')
const assert = require('assert');
const mocha = new Mocha()

mocha.suite.emit('pre-require', this, 'solution', mocha)

class StairSteps {

    solution(steps) {
      let result = []
      this.removeSteps(steps, [], result)
      return result
    }

    removeSteps(steps, combination, result) {       
        for (let i = 0; i < steps; i++) {
            // from 1 to n
            this.removeStep(i + 1, steps, combination, result)    
        }         
    }

    removeStep(step, steps, combination, result) {
        const newSteps = steps - step
        if (newSteps < 0) {
            // is not a combination
            return
        }
        
        if (newSteps === 0) {
            result.push([...combination, step])
        } else {
            return this.removeSteps(newSteps, [...combination, step], result)
        }
    }
}


describe('# tests for StairSteps', () => {


    it('solution 1 it should be equals',() => {
        const stair = new StairSteps()
        const result = stair.solution(1)
        assert.strictEqual( JSON.stringify(result), '[[1]]')
    })
    it('solution 2 it should be equals',() => {
        const stair = new StairSteps()
        const result = stair.solution(2)
        assert.strictEqual( JSON.stringify(result), '[[1,1],[2]]')
    })
    it('solution 3 it should be equals',() => {
        const stair = new StairSteps()
        const result = stair.solution(3)
        assert.strictEqual( JSON.stringify(result), '[[1,1,1],[1,2],[2,1],[3]]')
    })
    it('solution 4 it should be equals',() => {
        const stair = new StairSteps()
        const result = stair.solution(4)
        const expected = [[1,1,1,1],[1,1,2],[1,2,1],[1,3],[2,1,1],[2,2],[3,1],[4]]
        assert.strictEqual( JSON.stringify(result), JSON.stringify(expected))
    })
    it('solution 5 it should be equals',() => {
        const stair = new StairSteps()
        const expected = [[1,1,1,1,1],[1,1,1,2],[1,1,2,1],[1,1,3],[1,2,1,1],[1,2,2],[1,3,1],[1,4],[2,1,1,1],[2,1,2],[2,2,1],[2,3],[3,1,1],[3,2],[4,1],[5]]
        const result = stair.solution(5)
        assert.strictEqual( JSON.stringify(result), JSON.stringify(expected))

    })

})


module.exports = StairSteps