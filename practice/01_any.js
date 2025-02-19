"use strict";
//any类型 赋什么类型的值它就是什么类型
let a1;
a1 = 9;
a1 = 'fjasf';
a1 = true;
console.log(typeof a1); //输出结果：boolean
let x1;
x1 = a1;
console.log(typeof x1); //输出结果：boolean
//a1污染了x1，导致x1不是string 而是boolean
//结论：any类型的变量会污染其他变量，从而继承自己的类型
a1 = 'abc';
console.log(a1.toUpperCase());
console.log(typeof a1);
