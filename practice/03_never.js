"use strict";
//never类型
// let a3 :never
// a3 = 1
let a3;
a3 = 'qqq';
if (typeof a3 === 'string') {
    console.log(a3.toUpperCase());
}
else {
    console.log(a3);
}
