function solution (numbers, k) {
    let count = k
    let i0 = 0
    let i = 0
    for (; i < numbers.length; i++) {
        if (numbers[i] == 0) {
            count = count - 1
        }

        if (count < 0) {
            if (numbers[i0] === 0) {
                count = count + 1
            }
            i0 = i0 + 1
        }
    }
    return i - i0
}

let a = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1]
let s = solution(a, 3)

console.log(s)