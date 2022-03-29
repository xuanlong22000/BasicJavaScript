const controller = async (req, res) => {
    await doA()

    await doB()
}

const doA = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
            console.log('Display doA')
        }, 10000)
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