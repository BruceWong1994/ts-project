"use strict";
//定义 类 结构
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak(n) {
        for (let index = 0; index < n; index++) {
            console.log(`我叫${this.name},我今年${this.age},这是第${index}个`);
        }
    }
    info(x) {
        console.log(`这是${x}`);
    }
}
const u1 = new User('bruce', 30);
u1.speak(3);
u1.info(666);
//定义 对象 结构
const U2 = {
    name: 'bruce',
    age: 30
};
let cf1 = (a, b) => { return a + b + 1; };
