const a = () => {
    console.log('long')
}
const b = () => {
    console.log('duke')
}
const main = () => {
    setImmediate(b) //3

    setTimeout(() => {
        process.nextTick(() => { console.log('wibu') })
        setImmediate(() => { console.log('huy') })
    }, 0)

    process.nextTick(a) //1
}
main()
/* 
Theo ly thuyet, process.nextTick() nó ko nằm trong event loop, nó sẽ được xử lý sau khi 
tiến trình hiện tại được hoàn thành tại bất kỳ giai đoạn nào của event loop, điều đó có nghĩa là  
nó cũng không hẳn là chỉ được gọi sau khi task trong giai đoạn hiện tại được hoàn thành, 
nó cũng không có nghĩa là nextTick sẽ được thực thi sau khi callback hiện tại được hoàn thành. 
nextTick đôi khi còn được thực thi trước khi event loop chuyển sang một giai đoạn mới.

setTimeOut() và setImmediate() nằm trong event loop , setTimeout() thực thi trước setImmediate() điều đó chưa đúng,
setImmediate sẽ thực thi trước setTimeout() khi cả 2 nằm trong 1 callback

=> Tỉ lệ mức độ uy tiên thực thi process.nexTick() cao hơn setImmediate()
*/
