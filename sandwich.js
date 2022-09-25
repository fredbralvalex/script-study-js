function make (ingredients) {

    let count = 0
    if (!ingredients || ingredients.length !== 4) {
        return 0
    } else {
        return makeOne(ingredients, count)
    }
}

function makeOne (ingredients, count) {
    const bread = 3
    const meat = 2
    const tomate = 5
    const cheese = 4
    const canMake = ingredients[0] >= bread && ingredients[1] >= meat && ingredients[2] >= tomate && ingredients[3] >= cheese
    if (canMake){
        return makeOne([ingredients[0] - bread, ingredients[1] - meat, ingredients[2] - tomate, ingredients[3] - cheese], count + 1)
    } else {
        return count
    }

}