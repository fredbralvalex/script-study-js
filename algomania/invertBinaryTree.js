function solution(tree) {
    if (!tree.left && !tree.right){
        return tree
    }

    let right = tree.right
    tree.right = tree.left
    tree.left = right

    if (tree.left){
        tree.left = solution(tree.left)
    }
    if (tree.right){
        tree.right = solution(tree.right)
    }
    return tree
}