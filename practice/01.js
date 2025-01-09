"use strict";
let a1;
a1 = 9;
a1 = 'fjasf';
a1 = true;
// console.log(typeof a1);
let x1;
x1 = a1;
console.log(typeof x1); //a1污染了x1，导致x1不是string 而是boolean
a1 = 'abc';
console.log(a1.toUpperCase());
