function reverseArray(arr) {
    var arr2 = new Array
    for (var i = arr.length - 1; i >= 0; i--) {
        arr2.push(arr[i])
    }
    return arr2
}
console.log(reverseArray([1, 2, 3, 6, 5, 7]))

function reverseArrayInPlace(arr) {
    arr.reverse()
    return arr
}
console.log(reverseArrayInPlace(['a', 'b', 'c', 'd']))