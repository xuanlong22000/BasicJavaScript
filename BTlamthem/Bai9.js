function event1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Event1 is success')
            resolve('event1')
        })
    })
}

function event2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Event2 fail')
        }, 0)

    })
}

function event3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Event3 is success')
            resolve('event3')
        }, 0)
    })
}

Promise.allSettled([event1(), event2(), event3()]).then((message) => { console.log(message) })