var loop = (value, test, update, body) => {
    if (test(value)) {
        body(value)
        return loop(update(value), test, update, body)
    }
    /*
        if(!test(value)){
            return false
        }
        body(value)
        return loop(update(value),test,update,body)
    */
}
loop(3, value => value > 0, value => value - 1, console.log);