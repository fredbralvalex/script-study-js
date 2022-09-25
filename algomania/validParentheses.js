function solution_ (str) {

    stack = []
    mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for(let i = 0; i < str.length; i++) {
        if (mapping[str[i]]) {
            if (stack.length && mapping[str[i]] === stack.pop()) {
                continue
            }            
        }
        stack.push(str[i])
    }

    return stack.length === 0
}

function solution (str) {

    stack = []
    mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    const values = Object.values(mapping)
    for(let i = 0; i < str.length; i++) {
        if (mapping[str[i]]) {
            if (stack.length === 0 || mapping[str[i]] !== stack.pop()) {
                return false
            }            
        }
        if (values.includes(str[i])) {
            stack.push(str[i])
        }
    }
    return stack.length === 0
}