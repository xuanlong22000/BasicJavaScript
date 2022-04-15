const controller = async (req, res) => {
    doA()

    await doB()
    res.status(200).end()
}

const doA = () => {
    return new Promise((resolve, reject) => {
        resolve()
        console.log('Display doA')
    })

}
const doB = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
            console.log('Display doB')
        }, 1000)
    })
}
controller()
/*Trong event loop có 3 giai đoạn ,call stack WebAPIs Queue, Call stack có vai trò lưu trữ 


*/