const Mocha = require('mocha')
const assert = require('assert');
const mocha = new Mocha()

mocha.suite.emit('pre-require', this, 'solution', mocha)

const TOTAL_PINS = 10
class Bowling {

    frames = []
    turn = 0
    lastPinHit = 0
    roll(pinHit) {
      this.turn = this.turn + 1
      if (this.turn === 1) {
        if (pinHit === TOTAL_PINS) {
          //strike
          this.frames.push([pinHit])
          this.turn = 0
        } else {
          this.lastPinHit = pinHit
        }
      } else {
        this.frames.push([this.lastPinHit, pinHit])
        this.turn = 0
      }
    }

    score() {
      let result = 0
      let len = this.frames.length
      for (let i = 0; i < len; i++) {
        let first = this.frames[i][0]
        let second = this.frames?.[i]?.[1] || 0
        let sum = first + second
        if (first === TOTAL_PINS) {
          //strike
          result = result + sum + this.frames[i+1][0] +
          (this.frames[i+1]?.[1] >= 0 ? this.frames[i+1][1] : this.frames[i+2]?.[0])
        } else if (sum === TOTAL_PINS) {
          //spare
          result = result + sum + this.frames[i+1][0]
        } else {
          result = result + sum
        }
      }
      return result
    }
}


describe('# tests for Bowling', () => {

    function repeat(func, times) {
        for (x = 0; x < times; x++) {
          func()
        }
      }

    it('it should be 0',() => {
        const game = new Bowling()
        repeat(() => game.roll(0), 20)        
        assert.equal(game.score(), 0)
    })

    it('it should be 40',() => {
        const game = new Bowling()
        repeat(() => game.roll(2), 20)        
        assert.equal(game.score(), 40)
    })

    it('it should be 53 - a spare',() => {
      const game = new Bowling()
      game.roll(0)
      game.roll(10)

      game.roll(3)
      game.roll(5)

      repeat(() => game.roll(2), 16)        
      assert.equal(game.score(), 32 + (10 + 3) + 3 + 5)
    })

    it('it should be 58 - a strike',() => {
      const game = new Bowling()
      game.roll(10)

      game.roll(3)
      game.roll(5)

      repeat(() => game.roll(2), 16)
      assert.equal(game.score(), 32 + (10 + 3 + 5) + 3 + 5)
  })

    it('it should be 103 - a turkey',() => {
      const game = new Bowling()
      game.roll(10)
      
      game.roll(10)

      game.roll(10)

      game.roll(3)
      game.roll(5)

      repeat(() => game.roll(2), 12)
      assert.equal(game.score(), 24 + (10 + 10 + 10) + (10 + 10 + 3) + (10 + 3 + 5) + 3 + 5)
  })

})


module.exports = Bowling