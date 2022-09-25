const grandParent = document.querySelector(".grandParent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")

const divs = document.querySelectorAll('div')
// divs.forEach((div)=> {
//     div.addEventListener('click', () => {
//         console.log('hi')
//     })
// })

// document.addEventListener('click', (e) => {
//     if(e.target.matches('div')){
//         console.log('hi')
//     }
// })

addGlobalEventListener('click', 'div', (e) => {
    console.log('hi')
})

function addGlobalEventListener (type, selector, callback) {
    document.addEventListener(type, (e)=> {
        if (e.target.matches(selector)) {
            callback(e)
        }
    })
}

const newDiv = document.createElement('div')
newDiv.style.width = '200px'
newDiv.style.height = '200px'
newDiv.style.backgroundColor = 'purple'
document.body.append(newDiv)

// grandParent.addEventListener('click', (e) => {
//     console.log("Grandparent Bubble")
    // e.stopPropagation()
    // e.preventDefault()
// }, {capture: false, once: true})

// parent.addEventListener('click', (e) => {
//     console.log("Parent Bubble")
//     // e.stopPropagation()
//     // e.preventDefault()
// }, {capture: false})

// child.addEventListener('click', (e) => {
//     console.log("Child Bubble")
//     // e.stopPropagation()
//     // e.preventDefault()
// }, {capture: false})

// document.addEventListener('click', (e) => {
//     console.log('document Bubble')
//     // e.stopPropagation()
//     // e.preventDefault()
// }, {capture: false})


// grandParent.addEventListener('click', (e) => {
//     console.log("Grandparent Capture")
//     // e.stopPropagation()
//     // e.preventDefault()
// }, {capture: true})

// parent.addEventListener('click', (e) => {
//     console.log("Parent Capture")
//     // e.stopPropagation()
//     // e.preventDefault()
// }, {capture: true})

// child.addEventListener('click', (e) => {
//     console.log("Child Capture")
//     // e.stopPropagation()
//     // e.preventDefault()
// }, {capture: true})

// document.addEventListener('click', (e) => {
//     console.log('document Capture')
//     // e.stopPropagation()
//     // e.preventDefault()
// }, {capture: true})

const body = document.body
// body.append('Hello World ', 'Bye')

const div = document.createElement("div")
const strong = document.createElement("strong")
// div.innerText = 'Hello child'
// div.textContent = 'Hello child 2'
// div.innerHTML = '<strong>Hello child 2</strong>'
// <div>Hello World</div>
strong.innerText = 'Hello strong child'
div.append(strong)
body.append(div)
// body.appendChild(div)

// const div2 = document.querySelector('div')
// console.log(div2)
// console.log(div2.textContent)
// console.log(div2.innerText)

const div3 = document.querySelector('div')
const spanHi = document.querySelector('#hi')
const spanBye = document.querySelector('#bye')
spanBye.remove()
div3.append(spanBye)
// div3.removeChild(spanHi)

console.log(spanHi.getAttribute('title'))
spanHi.setAttribute('title', 'Hello hi')
spanHi.title = 'Hello Hi!'
spanHi.removeAttribute('title')
console.log(spanHi.title)

console.log(spanHi.dataset)
console.log(spanHi.dataset.test)
console.log(spanHi.dataset.longerName)

spanHi.dataset.newName = 'Hi'

spanHi.classList.add('new-class')
spanHi.classList.remove('hi1')
spanHi.classList.toggle('hi3', false)

spanBye.style.color = 'red'
spanBye.style.backgroundColor = 'gray'