// import doPrintSomething from "./module.js"
// const jsonData = require('./map.json')
// import jsonData from './map.json'

function bold(strings, ...values) {
    const string = values.reduce((previous, current, index) => {
        return `${previous}<strong>${current}</strong>${strings[index + 1]}`
    }, strings[0] )
    return string
}

function queryAll(strings, ...values) {
    const string = values.reduce((previous, current, index) => {
        return `${previous}${current}${strings[index + 1]}`
    }, strings[0] )

    return document.querySelectorAll(string)
}

const firstName = 'Fred'
const hobby = 'drawing'
console.log(queryAll`div`)
console.log(bold`My Fist name is ${firstName} and I love ${hobby}`)

function* idGenerator() {
    let id = 1

    while (true) {
        yield id
        id++        
    }

}

function* generatorFunction() {
    console.log('Before 1')
    yield 1
    console.log('After 1')
    console.log('Before 2')
    yield 2
    console.log('After 2')
    console.log('Before 3')
    yield 3
    console.log('After 3')
}

// const generator = generatorFunction()
const generator = idGenerator()
// console.log(generator.return())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next().value)

// doPrintSomething()
document.addEventListener('click', ()=> {
    import("./module.js").then(({default : doPrintSomething}) => {
        doPrintSomething()
    })
})

import("./removeDuplicated.js").then(({default : core}) => {
    const users = [
        { id: 32, fname: 'Mary', lName: 'Smith' },
        { id: 65, fname: 'Steve', lName: 'Hancock' },
        { id: 105, fname: 'LJ', lName: 'Estoque' },
        { id: 65, fname: 'Steve', lName: 'Hancock' },
        { id: 12, fname: 'Lynette', lName: 'Turner' },
        { id: 32, fname: 'Mary', lName: 'Smith' }
    ]
    const result = core(users)
    console.log(result)
})

fetch('./map.json').then((response) => {
    return response.json()
}).then((data) => {
    console.log('fetch import map.json')
    console.log(data)
})

import('./map.json', {assert: { type: "json" }}).then((module) => {
    console.log('import map.json')
    console.log(module.default)
})

import("./decoratorFunction.js").then((module) => {
    
    function parse (str) {
        let obj = JSON.parse(str)
        console.log(obj)
        return obj
    }

    const parseError = module.decorators.errorDecorator(module.decorators.logDecorator(parse))
    parseError('{ "a": 12}')
})

// import('./app/myModule').then((module) => {
//     console.log(module.doStuff())
// }
let obj = { "key" : 1, "value": 2}
let objA = Object.assign({}, obj)

console.log(obj)
console.log(objA)