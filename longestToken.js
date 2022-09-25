function getLongest(str) {
    if (!str) return ''

    let actual = ''
    let previous = ''
    for(let i = 0; i < str.length; i++) {
        if (actual.includes(str[i])) {
            if (actual.length > previous.length) {
                previous = actual
            }
            actual = actual.substring(actual.lastIndexOf(str[i]) + 1, actual.length)
            actual = actual.concat(str[i])
            //console.log(previous)
        } else {
            actual = actual.concat(str[i])
        }
    }

    if (actual.length > previous.length) {
        return actual
    }
    return previous
}