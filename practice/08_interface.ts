//定义一个接口
interface UserInterface {
    name:string,
    age:number,
    speak?(n:number): void,
    info?:(x:number) => void
}

//定义 类 结构
class User implements UserInterface {
    constructor(
        public name:string,
        public age:number
    ){}
    speak(n: number):void {
        for (let index = 0; index < n; index++) {
            console.log(`我叫${this.name},我今年${this.age},这是第${index}个`); 
        }
    }
    info(x:number):void {
        console.log(`这是${x}`);
    }
}
const u1 = new User('bruce',30)
u1.speak(3)
u1.info(666)

//定义 对象 结构
const U2:UserInterface = {
    name:'bruce',
    age:30
}

//定义 函数 结构
interface CountFunc {
    (a:number,b:number):number
}

let cf1:CountFunc = (a,b) => {return a+b+1 }