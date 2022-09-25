function combination () {
    const arr = ["A","B","C","D","E","F"]
    let count = {c : 0}
    combinations2(arr, 3, 0, [], count)
    return count
}

function combinations2 (arr, len, startPosition, result, count){
    if (len == 0) {
        count.c++
        console.log (result)
        return 
    }       
    for (let i = startPosition; i <= arr.length-len; i++){
        result[result.length - len] = arr[i];
        combinations2(arr, len-1, i+1, result, count);
    }
}     