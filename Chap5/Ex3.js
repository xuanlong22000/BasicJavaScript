var every = (arr, test) => {
    for (var element of arr) {
        if (test(element) === false) {
            return false
        }
    }
    return true
}
console.log(every([1, 3, 4, 5, 6, 10], element => element <= 10))
/*

var arr = [1, 2, 3, 4, 5, 6]
var every = arr.every((x) => {
    return x < 3
})
console.log(every)

var some = arr.some((x) => {
    return x < 3
})
console.log(some)

*/