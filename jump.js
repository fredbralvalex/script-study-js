
const solution = (n) => {
    // Type your solution here
    if (n < 1) return 0
    
    let jumps = 0
    for (let i = n; i > 0; i++) {
        jumps = jumps + jump1(i, n)
    }
    
    return jumps
};

const jump1 = (n) => {
    return n
}

const jump2 = (n) => {
    return n/2
}

const jump3 = (n) => {
    return n/3
}

const jump = (v, n) => {
    // can jump 1, 2 o 3
    
    if (v === 1) {
        return n
    } else if (v === 2) {
        return n/v
    } else if (n === 3) {
        return 4
    } else {
        //  > 3
        return 1 + jump (n-1, 4)
    }
}
