class MultiplicatorUnitFailure extends Error { }
var primitiveMultiply = (a, b) => {
    if (Math.random() < 0.2) {
        return a * b
    } else {
        throw new MultiplicatorUnitFailure('Error')
    }
}
var reliableMultiply = (a, b) => {
    while (true) {
        try {
            return primitiveMultiply(a, b)
        } catch (error) {
            if (!(error instanceof MultiplicatorUnitFailure)) { throw error }
        }
    }
}
console.log(reliableMultiply(8, 8))
