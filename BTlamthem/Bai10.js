async function waitAndMaybeReject() {
    await new Promise((r) => setTimeout(r, 5000))
    throw Error('This is Error')
}

async function test1() {
    try {
        return await waitAndMaybeReject()
    } catch (e) {
        return 'OH no'
    }
}
//test1() đúng vì giá trị value được catch ra khi lỗi ở phần try

async function test2() {
    try {
        return await waitAndMaybeReject()
    } catch (e) {
        throw e
    }
}
//test2() thừa try catch và async/await vì không có try catch và async/await vẫn throw ra lỗi theo function() gốc

async function test3() {
    return await waitAndMaybeReject()
}
//test3() bị thừa async/await vì không có async/await vẫn throw ra lỗi theo function() gốc

function test4() {
    return waitAndMaybeReject()
}
//test4() đúng vì throw đươc ra lỗi theo function gốc

const main = async () => {
    const value = await test2()
    console.log('value', value)
}
main()