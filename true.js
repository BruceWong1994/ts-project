"use strict";
//使用ts排查问题
//1.不清不楚的数据类型
// let welcome = 'hello'
// welcome();
//2.有漏洞的逻辑
// let str = Date.now() %2 ?'奇数':'偶数';
// console.log(str);
// if(str !== '奇数'){
//     alert('不是奇数')
// }else if (str === '偶数'){
//     alert('是偶数')
// }
//3.访问不存在的属性or拼写错误
// const obj = { width :10, height:15 };
// const area = obj.width * obj.heijgt;
// console.log(area);
