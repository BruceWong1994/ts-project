class Person {
    constructor(public name:string,public readonly age:number){}
    info(){
        console.log(`我叫${this.name}，今年${this.age}岁`);
    }
}
let me = new Person('bruce',31);
me.info();

class Student extends Person {
    constructor(public name:string,public age:number,public grade:string){
        super(name,age)
        // this.grade = grade
    }
    
    override info(){
        console.log(`我是${this.name}，今年${this.age}岁，现在上${this.grade}`);
    }
}
let xiaoli = new Student('小丽',16,'初三')
xiaoli.info();

class StudentDetails extends Person {
    constructor(name:string, age:number, public detail:string){
        super(name,age)
    }
    study(){
        console.log(`我是${this.name}，今年${this.age}岁，${this.detail}`);
    }
}

const SD = new StudentDetails('李梅',13,'期末时获得了三好学生')
SD.study()