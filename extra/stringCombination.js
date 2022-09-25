const Mocha = require('mocha')
const assert = require('assert');
const mocha = new Mocha()

mocha.suite.emit('pre-require', this, 'solution', mocha)

class StairSteps {

    solution(str, partition = 0) {
      let result = []
      this.removeSteps(str, [], result, partition)
      return result
    }

    removeSteps(str, combination, result, partition) {
        const len = str.length
        for (let i = 0; i < len; i++) {
            // from 1 to n
            this.removeStep(str.substring(0, i + 1), str, combination, result, partition)    
        }         
    }

    removeStep(newly, oldly, combination, result, partition) {
        if (partition > 0 && combination.length >= partition) {
            return
        }
        const rest = oldly.length - newly.length
        if (rest === 0) {
            const comb = [...combination, newly]
            if (partition === 0) {
                result.push(comb)
            } else if (comb.length === partition) {
                result.push(comb)
            }
            return;
        } else {
            return this.removeSteps(oldly.substring(newly.length),[...combination, newly], result, partition)
        }
    }
}


describe('# tests for StairSteps', () => {


    it('solution 1 it should be equals',() => {
        const stair = new StairSteps()
        const result = stair.solution('x')
        assert.strictEqual(JSON.stringify(result), '[["x"]]')
    })
    it('solution 2 it should be equals',() => {
        const stair = new StairSteps()
        const result = stair.solution('xy')
        assert.strictEqual( JSON.stringify(result), '[["x","y"],["xy"]]')
    })
    it('solution 3 it should be equals',() => {
        const stair = new StairSteps()
        const result = stair.solution("xyx")
        assert.strictEqual( JSON.stringify(result), '[["x","y","x"],["x","yx"],["xy","x"],["xyx"]]')
    })
    it('solution 5 it should be equals',() => {
        const stair = new StairSteps()
        const result = stair.solution("xyxyx", 3)
        let count = 0;
        for (let i = 0; i < result.length; i++) {
            let equals = result[i][0].concat(result[i][1]) === result[i][1].concat(result[i][2]) ||
            result[i][0].concat(result[i][1]) === result[i][2].concat(result[i][0])
            if (!equals) {
                count++;
            }
        }
        console.log(count)
        assert.strictEqual( JSON.stringify(result), '[["x","y","xyx"],["x","yx","yx"],["x","yxy","x"],["xy","x","yx"],["xy","xy","x"],["xyx","y","x"]]')
    })
})


module.exports = StairSteps