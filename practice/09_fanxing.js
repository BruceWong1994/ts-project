"use strict";
//泛型 函数
function logData(data) {
    console.log(data);
}
logData(22);
logData('bruce');
let pi1 = {
    name: 'bruce',
    age: 23,
    spe: 888
};
//泛型 类
class Person2 {
    constructor(name, age, extraInfo) {
        this.name = name;
        this.age = age;
        this.extraInfo = extraInfo;
    }
    speak() {
        console.log(`我叫${this.name},我今年${this.age}岁，我${this.extraInfo}`);
    }
}
let per2 = new Person2('bruce', 30, '在学习ts');
per2.speak();
