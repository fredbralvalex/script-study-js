
class MySolution {
    board
    solution(board, word) {
        this.board = board

        if (!word) {
            return false
        }
        
        for (let x = 0; x < board.length; x++) {
            for (let y = 0; y < board[x].length; y++) {
                if (board[x][y] === word[0]) {
                    let move = [x, y]
                    if (this.deep_first_search(move, [move.toString()], word, 0)) {
                        return true
                    }
                }
            }
        }
    }

    deep_first_search(position, visitedPosition, word, index) {
        if(index >= word.length - 1) {
            return true
        }

        let x = position[0]
        let y = position[1]

        let possibleMoves = [[x+1, y], [x-1, y], [x, y+1], [x, y-1]]
        let maxX = this.board.length
        let maxY = this.board[0].length

        for(let i = 0; i < possibleMoves.length; i++) {
            let moveX = possibleMoves[i][0]
            let moveY = possibleMoves[i][1]
            if (moveX >= 0 && moveX < maxX && moveY >= 0 && moveY < maxY) {
                if (this.board[moveX][moveY] === word[index + 1]) {
                    if (!visitedPosition.includes([moveX, moveY].toString())) {
                        const nextMove = [moveX, moveY]
                        if (this.deep_first_search(nextMove, [...visitedPosition, nextMove.toString()], word, index+1)) {
                            return true
                        }
                    }
                }
            }
        }
        return false
    }
}

let board = [
    ['A','B','C','E'],  
    ['S','F','C','S'],    
    ['A','D','E','E']
  ]
let w = 'ABCCED'
let c = new MySolution().solution(board, w)
console.log(c)