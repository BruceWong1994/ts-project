"use strict";
const person = {
    name: '李四',
    age: 18
};
console.log(`我叫${person.name},我今年${person.age}岁`);
// let arr:number[] = ['a','545']
// let arr:string[] = ['a',false]
let a = [165, 328, 5];
let b;
// b = ['af']
b = ['af', 11];
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 5] = "Blue";
})(Color || (Color = {}));
console.log(Color[1]);
console.log(Color.Blue);
console.log(Color[4]);
console.log(Color.Red);
console.log(typeof Color);
let c = Color.Green;
console.log(`Color.Green: `);
console.log(c);
let colorName = Color[2];
console.log(`colorName:`);
console.log(colorName);
// let c1: number = Color[2];
let prettySure = 4;
console.log(typeof prettySure);
// console.log(prettySure.toFixed());
let arr1 = [1, 2, 'afd'];
// arr1 = '22'
