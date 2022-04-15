// function setTime1() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve()
//         }, 5000)
//     })
// }

// async function TimeOut() {
//     await setTime1()

//     setTimeout(() => {
//         console.log('hello event loop')
//     }, 0)
// }

// TimeOut()

setTimeout(() => {
    console.log('hello event loop')
}, 0)

function pause(millis) {
    var date = new Date();
    //console.log(date)
    var currentDate = null;
    do {
        currentDate = new Date();
        //console.log(currentDate)
    }
    while (currentDate - date < millis);
}

pause(5000)




