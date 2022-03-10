var arr = []

function range(start, end) {
    for (var i = start; i <= end; i++) {
        arr.push(i)
    }
    return arr
}

function sum() {
    var total = 0
    for (var i in arr) {
        total = total + arr[i]
    }
    return total
}
console.log('total: ' + sum(range(1, 10)))