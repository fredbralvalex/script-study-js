class solution {
    run(root, expected) {
        let result = []
        if (root) {
            this.deepFirstSearch(root, [], 0, expected, result)
        }
        return result
    }

    deepFirstSearch(node, currentPath, sum, expected, result) {
        if (!node) {
            return
        }

        sum = sum + node.value
        let noChild = !node.left && !node.right
        if (noChild && sum === expected) {
            result.push([...currentPath, node.value])
            return
        }

        this.deepFirstSearch(node.left, [...currentPath, node.value], sum, expected, result)
        this.deepFirstSearch(node.right, [...currentPath, node.value], sum, expected, result)
    }
}

const input = { 
    value: 5, 
    left: {
        value: 4, 
        left: {
            value: 11, 
            left: {
                value: 7
            }, 
            right: {
                value: 2
            }
        }, 
    }, 
    right: {
        value: 8,
        left: {
            value: 13,
        }, 
        right: {
            value: 4,
            left: {
                value: 5
            }, 
            right: {
                value: 1  
            }
        }
    }
} 
let s = new solution()
let result = s.run(input, 22)
console.log(result)