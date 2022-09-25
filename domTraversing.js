function getByClassName(element, className) {
    let stack = [];
    let result = [];
    stack.push(element);
    while(stack && stack.length > 0) {
        let actual = stack.pop();
        if (actual) {
            if (actual.classList.contains(className)){
                result.push(actual.id);
            }
            stack.push(...actual.children);            
        }
    }
    return result;
}

function getBySelector (element, selector) {
    let queue = selector.split('>');
    let stack = [element];
    let result = [];
    while(stack && stack.length > 0) {
        let actual = stack.pop();
        if (actual) {
            if (actual.classList.contains(queue[0])){
                checkElementClasses(0, actual, queue, result)
            }
            stack.push(...actual.children);            
        }
    }

    return result;
}

function checkElementClasses(position, element, classNames, result) {
    if (element.classList.contains(classNames[position])) {
        if (position === classNames.length - 1) {
            result.push(element);
        }    

        for(var child of element.children) {            
            checkElementClasses(position + 1, child, classNames, result);
        }
    }
}
const element = document.getElementById('root');
// console.log(getByClassName(element,'c'));

console.log(getBySelector(element,'a>b>c'));
console.log(getBySelector(element,'a>b>a>b'));
console.log(getBySelector(element,'a>b'));
console.log(getBySelector(element,'e'));
