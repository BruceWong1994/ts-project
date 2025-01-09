let a2:unknown
a2 = 9
a2 = 'fjasf'
a2 = true

// console.log(typeof a2);

let x2 : string
x2 = a2 as string
// x2 = <string>a2
console.log(typeof x2);//a污染了x，导致x不是string 而是boolean

a2 = 'hhh'
// console.log((<string>a2).toUpperCase());
console.log((a2 as string).toUpperCase());
