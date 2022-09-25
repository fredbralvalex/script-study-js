// const grandParent = document.getElementById('grand-parent-id')

// const grandParent = document.querySelector('#grand-parent-id')
// const grandParent = document.querySelector('.grandParent') //select only one
// const parents = Array.from(grandParent.children)
// const parentOne = parents[0]
// const children = parentOne.children

// const parents = Array.from(document.getElementsByClassName('parent'))
// const parent = document.querySelector('.parent')
// const parents = document.querySelectorAll('.parent')
// parents.forEach(changeColor)
// parents.forEach(changeColor)
// changeColor(grandParent)
// changeColor(parent)

// changeColor(children[0])

// const children = grandParent.querySelectorAll('.child')
// children.forEach(changeColor)

const childOne = document.querySelector('#child-one')
// const parent = childOne.parentElement
// const grandParent = parent.parentElement

// const grandParent = childOne.closest('.grandParent')

// changeColor(grandParent)
// changeColor(childOne)

const childTwo = childOne.nextElementSibling
// changeColor(childTwo)
changeColor(childTwo.previousElementSibling)

function changeColor(element) {
    element.style.backgroundColor = '#333'
}