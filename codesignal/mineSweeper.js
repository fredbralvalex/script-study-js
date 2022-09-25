const Mocha = require('mocha')
const assert = require('assert');
const mocha = new Mocha()

mocha.suite.emit('pre-require', this, 'solution', mocha)

function counting (x, y, max_x, max_y, result, visitedPositions) {

    if (result[x][y]===true) {
        result[x][y] = 'bomb';
        return;
    }

    let possibleMoves = [[x-1, y-1],[x-1, y],[x-1, y+1],[x, y-1],[x, y+1],[x+1,y-1],[x+1, y],[x+1, y+1]];
    const len = possibleMoves.length;
    let bombCount = 0;
    for(let i = 0; i < len; i++) {
        let moveX = possibleMoves[i][0];
        let moveY = possibleMoves[i][1];
        if (moveX >= 0 && moveX < max_x && moveY >= 0 && moveY < max_y) {
            if (result[moveX][moveY]===true) {
                bombCount++;
            }
        }
    }

    result[x][y] = bombCount;
    
    for(let i = 0; i < len; i++) {
        let moveX = possibleMoves[i][0];
        let moveY = possibleMoves[i][1];
        if (moveX >= 0 && moveX < max_x && moveY >= 0 && moveY < max_y) {
            const nextMove = [moveX, moveY];
            if (!visitedPositions.includes([moveX, moveY].toString())) {
                if (bombCount === 0) {
                    counting(moveX, moveY, max_x, max_y, result, [...visitedPositions, nextMove.toString()]);
                }
            } 
        }
    }
    
}

function solution (field, x, y) {
    const max_x = field?.length;
    const max_y = field?.[0]?.length;
    let result = Object.assign([], field);
    
    if (!max_x) {
        return []
    }    
    
    counting(x, y, max_x, max_y, result, [])

    for(let i = 0; i < max_x; i++) {
        for(let j = 0; j < max_y; j++) {
            if (typeof result[i][j] === 'boolean') {
                result[i][j] = -1;
            }
        }
    }

    return result;
}

describe('# tests for mineSweeper', () => {

    it('it should be ...',() => {
        const field = [[false, true, true],
                        [true, false, true],
                        [false, false, true]];

        const s = solution(field, 1, 1);
        
        assert.equal(JSON.stringify(s), "[[-1,-1,-1],[-1,5,-1],[-1,-1,-1]]");
    })

    it('it should be 2...',() => {
        const field = [[true, false, true, true, false],
                        [true, false, false, false, false],
                        [false, false, false, false, false],
                        [true, false, false, false, false]];

        const s = solution(field, 3, 2);
        
        assert.equal(JSON.stringify(s), `[[-1,-1,-1,-1,-1],[-1,3,2,2,1],[-1,2,0,0,0],[-1,1,0,0,0]]`);
    })
})
