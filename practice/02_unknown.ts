//unknown类型  赋什么类型的值它就是什么类型
let a2:unknown
a2 = 9
a2 = 'fjasf'
a2 = true

console.log(typeof a2);//输出结果：boolean

let x2 : string

// x2 = a2 
//直接赋值会报错，提示不能将unknown分配给string, a2是boolean、x2是string

x2 = a2 as string
//或者
// x2 = <string>a2

console.log(typeof x2);//a2污染了x2，导致x2不是string 而是boolean  输出结果：boolean


a2 = 'hhh'
// console.log((<string>a2).toUpperCase());
console.log((a2 as string).toUpperCase());
