const yuan = [1,2,3]
const target = [0]
let y1

//1
y1 = yuan.forEach(el => {
    target.push(el)
    return el +100
})

//2
// y1 = yuan.map(el => {
//     target.push(el)
//     return el +100
// })

console.log(yuan)
console.log(target)
console.log(y1);

