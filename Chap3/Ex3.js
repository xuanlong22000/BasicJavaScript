function countBs(string) {
    var count = 0
    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) == 'B') {
            count += 1
        }
    }
    return count
}

function countChar(string, char) {
    var count = 0
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) == char) {
            count += 1
        }
    }
    return count
}
console.log(countBs('BBBBBAAAABCC'))
console.log(countChar('kakakllkkakkak', 'k'))