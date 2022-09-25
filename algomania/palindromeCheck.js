function solution(str) {
    let i = str.length - 1
    let i0 = 0
    while(i0 <= i) {
        if (str[i0] === str[i]) {
            i0 = i0 + 1
            i = i - 1
        } else {
            return false
        }
        
    }
    return true
}

console.log(solution('algomania'))
console.log(solution('madam'))
console.log(solution('level'))
console.log(solution('hannah'))