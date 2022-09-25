function encode (str) {
    if (!str) return ''
    let previous = ''
    let count = 1
    let result = ''
    for(let i = 0; i < str.length; i++) {
        if (previous === str[i]) {
            count = count + 1
        } else {
            if (previous) {
                result = result.concat(count).concat(previous)
            }
            count = 1
            previous = str[i]
        }
    }
    result = result.concat(count).concat(previous)
    return result
}