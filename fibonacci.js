function fibonacci (length) {

    if (length === 0) {
        return []
    } else if (length === 1) {
        return [0]
    } else if (length === 2) {
        return [0, 1]
    } else {
        return fib([0,1], length)
    }
}

function fib (sequence, length) {
    if (sequence.length < length) {
        return fib([...sequence, sequence[sequence.length-2] + sequence[sequence.length-1]] , length)
    } else {
        return sequence
    }
}


function fibonnaci (n) {

    if (n <= 1) {
      return n
    }
    let mem = { 0: 1, 1: 1, 2: 1}
    for(let i = 2; i < n; i++){
      mem[i] = mem[i - 1] + mem[i - 2]
      if (i > 2) {
        delete mem[i-3]
        delete mem[i-2]
      }
    }
    console.log(mem)
    return mem[n-1]
}


function fibonnaci2 (n) {

    if (!n) {
        return 0;
    }
    if (n <= 1) {
      return n
    }
    let fibN = 1
    let fibNm1 = 1
    let fibNm2 = 0
    for(let i = 2; i < n; i++){
        fibNm2 = fibNm1
        fibNm1 = fibN
        fibN = fibNm1 + fibNm2
    }
    return fibN
}

console.log(fibonnaci(80))