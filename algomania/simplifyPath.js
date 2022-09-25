function solution(path) {
    let i0 = 0
    let stack = []
    
    if (!path.endsWith('/')) {
        path = path.concat('/')
    }
    
    let len = path.length
    for (let i = 0; i < len; i++) {
        if (path[i] === '/') {
            let current = path.substring(i0, i)
            i0 = i

            if (current) {
                if (current === '/..') {
                    if (stack.length > 0) {
                        stack.pop()
                    }
                } else if (current === '/.' || current === '/') {
                    continue
                } else {
                    stack.push(current)
                }
            }
        }
    }

    if (stack.length === 0) {
        stack.push('/')
    }
    return stack.join('')
}

let s = solution('/home/../home/etc/.././url/echo')
console.log(s)