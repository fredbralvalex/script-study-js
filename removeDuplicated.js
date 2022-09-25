
function core(users) {
    // return [...users.reduce((map, obj) => map.set(obj.id, obj), new Map()).values()]
    // return [...users.reduce((map, obj) => map.set(obj.id, obj), new Map()).values()]
    return Array.from(users.reduce((map, obj) => map.set(obj.id, obj), new Map()).values())
    // return Object.values(users.reduce((accumulator, element) => {
    //     if (accumulator[element.id]) {
    //         return accumulator
    //     } else {            
    //         accumulator[element.id]=element
    //         return accumulator
    //     }
    // }, {}))
}

export default core