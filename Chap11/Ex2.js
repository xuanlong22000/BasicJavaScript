/*function action1() {
    console.log('calling')
}
function action2(par1, par3) {

    setTimeout(() => {
        console.log('TURNED IN')
    }, 5000);

}

function action3() {
    console.log('Turn in')
}

Promise.resolve(action1()).then(action2()).then(action3())
*/
//PREFER
function Promise_all(promises) {
    return new Promise((resolve, reject) => {
        let results = []
        let pending = promises.length //length of array

        for (let i = 0; i < promises.length; i++) {
            promises[i].then(result => {
                results[i] = result
                --pending //--length of array

                if (pending == 0) {
                    resolve(results)
                }
            }).catch(reject);
        }

        if (promises.length == 0)
            resolve(results)
    });
}

function soon(val) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(val)
        }, 5000)
    });
}

Promise_all([]).then(array => {
    console.log("Arr [] :", array)
});

Promise_all([soon(1), soon(2), soon(3)]).then(array => {
    console.log("Arr [soon] : ", array)
});

Promise_all([soon(1), Promise.reject("X"), soon(3)])
    .then(() => {
        console.log("We should not get here")
    })
    .catch(error => {
        if (error != "X") {
            console.log("Fail : ", error)
        }
    });