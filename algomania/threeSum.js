function solution (numbers, target){
    let result = []
    numbers.sort((a,b)=> a-b)
    let i0 = 0
    let i1 = numbers.length - 1
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        i0 = i  + 1
        i1 = numbers.length - 1
        while(i0 < i1){
            sum = numbers[i0] + numbers[i] + numbers[i1]

            if (sum < target) {
                i0 = i0 +1
            } else if (sum > target) {
                i1 = i1 -1
            } else {
                result.push([numbers[i], numbers[i0], numbers[i1]])
                i0 = i0 +1
                i1 = i1 - 1
            }
        
        }
    }
    return result
}

let a =  [12, 3, 1, 2, -6, 5, -8, 6]
s = solution(a, 0)
console.log(s)