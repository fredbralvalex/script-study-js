function solution_0 (str) {
    let result = 0
    let i0 = 0
    let value = ''
    let len = str.length
    for (let i = 0; i < len; i++) {
        let map = {}
        map[str[i]] = true
        i0 = i

        while (true) {
            i0 = i0 + 1
            if (i0 >= len || !!map[str[i0]]) {
                if (Object.keys(map).length > result) {
                    value = Object.keys(map).join('')
                }
                result = Math.max(Object.keys(map).length, result)
                break
            }
            map[str[i0]] = true
        }
    }
    console.log(value)
    return result
}

function solution (str) {
    let result = 0
    let i0 = 0
    let value = ''
    let len = str.length
    let token = ''
    for (let i = 0; i < len; i++) {
        token = str[i]
        i0 = i

        while (true) {
            i0 = i0 + 1
            if (i0 >= len || token.includes(str[i0])) {
                if (token.length > result) {
                    value = token
                }
                result = Math.max(token.length, result)
                break        
            }
            token = token.concat([str[i0]])
        }
    }
    console.log(value)
    return result
}

let s = solution('zzzabcdadjhj')
console.log(s)