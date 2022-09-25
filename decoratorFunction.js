const errorDecorator = function(fn) {
    return function (...args) {
        try {
            console.log('Running function: ' + fn.name)
            fn(...args)
        } catch (err) {
            console.warn(err)
        }
    }
}

const logDecorator = function(fn) {
    return function (...args) {
        console.log('Executing function: ' + fn.name)
        console.time('fn')
        let val = fn(...args)
        console.timeEnd('fn')
        return val
    }
}

export const decorators = {
    errorDecorator,
    logDecorator
}