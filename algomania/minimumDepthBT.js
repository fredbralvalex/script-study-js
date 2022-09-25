function solution(root) {
    if (root) {
        queue = [{ el: root, lvl: 1 }]
        while (queue) {
            const obj = queue.shift()
            const node = obj.el
            let level = obj.lvl

            if (!node.left && !node.right) {
                return level
            }
            
            level = level + 1
            if (node.left){
                queue.push({el: node.left, lvl: level})
            }
            if (node.right){
                queue.push({el: node.right, lvl: level})
            }
        }

    }
    return 0
}