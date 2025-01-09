const person = {
    name: '李四',
    age: 18
}
console.log(`我叫${person.name},我今年${person.age}岁`);

// let arr:number[] = ['a','545']
// let arr:string[] = ['a',false]
let a:number[] = [165,328,5]
let b:[string,number]
// b = ['af']
b = ['af',11]

enum Color {Red = 1, Green = 2, Blue = 5}
console.log(Color[1]);
console.log(Color.Blue);
console.log(Color[4]);
console.log(Color.Red);
console.log(typeof Color);

let c:unknown = Color.Green;
console.log(`Color.Green: `);
console.log(c);

let colorName: any = Color[2];
console.log(`colorName:`);
console.log(colorName);

// let c1: number = Color[2];

let prettySure: Object = 4;
console.log(typeof prettySure);
// console.log(prettySure.toFixed());

let arr1:any[] = [1,2,'afd']
// arr1 = '22'
