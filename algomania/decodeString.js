function solution(str) {
    let stack = []
    let token = ''
    let num = 0
    const len = str.length
    for (let i = 0; i < len; i++){
        let s = str[i]
        if (s === '['){
            if (token) {
                stack.push(token)
                token = ''
            }
            stack.push(num)
            num = 0
        } else if (s === ']') {
            if (token) {
                stack.push(token)
                token = ''
            }

            let new_str = ''
            let first = stack.pop()
            while(first && isNaN(first)) {
                new_str = first + new_str
                first = stack.pop()
            }            
            new_str = new_str.repeat(first)
            stack.push(new_str)
        } else {
            if (isNaN(s)) {
                token = token + s
            } else {
                num = 10 * num + Number(s)
            }
        }
    }

    if (token) {
        stack.push(token)
    }

    return stack.join('')

}

let s = solution ("2[abc]3[cd]ef")
console.log(s)