function solution(tree1, tree2) {
    if (!tree1 && !tree2){
        return true
    } else if (tree1 && tree2 && tree1.value && tree2.value) {
        return solution(tree1.left, tree2.left) && solution(tree1.right, tree2.right)
    } else {
        return false
    }
}