"use strict";
//数据污染测试
let bruce = 'abc';
let nuomi = true;
let nico = 3;
// console.log(typeof bruce);
// console.log(typeof nuomi);
// console.log(typeof nico);
//bruce把nico从number类型污染成string类型了
nico = bruce;
console.log(typeof nico); //输出string
nico = nuomi;
console.log(typeof nuomi); //输出boolean
console.log(typeof nico); //输出boolean
