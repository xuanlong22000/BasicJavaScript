function do5Job() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(() => {
            console.log("Event 5 : " + i)
        }, Math.round(Math.random() * 10000))
    }
};

const unsovledJobs = Array.from(Array(4).keys()).map(() => do5Job());

Promise.all(unsovledJobs).then(function () { })
