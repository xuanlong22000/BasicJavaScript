/* 
for truy cap vao index, khong phai phan tu thuc te
forEach truy cap truc tiep den gia tri phan tu
*/
console.log('Index cua phan tu')

const arr = ['a', 'b', 'c']
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] + ' : ' + i)
}

console.log('Phan tu thuc')

arr.forEach((element) => {
    console.log(element)
})