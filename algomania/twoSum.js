function solution(numbers, target) {
    if (!numbers || numbers.length < 2) {
        return []
    }

    numbers.sort((a, b)=> a - b)
    i = 0
    idx = numbers.length - 1
    while (i < idx) {
        let sum = numbers[i] + numbers[idx] 
        if (sum === target) {
            return [numbers[i], numbers[idx]]
        } else if (sum > target) {
            idx = idx -1
        } else {
            i = i + 1
        }
    }

    return []
}

s = solution([4, 1, 2, -2, 11, 15, 1, -1, -6, -4] , 9)
console.log(s)