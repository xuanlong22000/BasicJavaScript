let arr = ['l', 'o', 'n', 'g']
let flatten = arr.reduce((a, b) => {
    return a.concat(b)
})
console.log(flatten)