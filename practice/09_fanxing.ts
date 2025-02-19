//泛型 函数
function logData<U>(data:U){
    console.log(data);
}

logData<number>(22)
logData<string>('bruce')

//泛型 接口
interface PersonInfo<T> {
    name:string,
    age:number,
    spe:T
}

let pi1:PersonInfo<number> = {
    name:'bruce',
    age:23,
    spe:888
}

//泛型 类
class Person2<Y> {
    constructor(
        public name:string,
        public age:number,
        private extraInfo:Y
    ){}
    speak(){
        console.log(`我叫${this.name},我今年${this.age}岁，我${this.extraInfo}`);
    }
}

let per2 = new Person2<string>('bruce',30,'在学习ts')
per2.speak()