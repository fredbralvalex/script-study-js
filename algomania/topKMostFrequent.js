function solution (numbers, k) {
    let map = {}
    let m_keys = []
    for (let i = 0; i < numbers.length; i++) {
        if (map[numbers[i]]) {
            map[numbers[i]] = map[numbers[i]] + 1
        } else {
            m_keys.push(numbers[i])
            map[numbers[i]] = 1
        }
    }

    let frequency = {}
    let keys = []
    // console.log(m_keys)
    // console.log(map)
    for(let i = 0; i < m_keys.length; i++){
        let k = m_keys[i]
        let v = map[k]
        if (!frequency[v]) {
            frequency[v] = []
            keys.push(v)
        }
        let el = frequency[v]
        el.push(k)
        frequency[v] = el
    }
    // Object.entries(map).forEach((i) => 
    //     {
    //         if (!frequency[i[1]]) {
    //             frequency[i[1]] = []
    //             keys.push(i[1])
    //         }
    //         let el = frequency[i[1]]
    //         el.push(i[0])
    //         frequency[i[1]] = el
    //     }
    // )
    keys.sort((a,b)=>b-a)
    let result = []
    for (let i = 0; i < keys.length && i < k; i++){
        result.push(...frequency[keys[i]])
    }
    return result.splice(0, k)
}

let s = solution([1, 1, 1, 3, 3, 5, 5 , 6, 7, 8, 9, 10], 2)
console.log(s)