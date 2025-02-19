abstract class Package {
    constructor(public weight:number){}
    abstract calculate():number
    printPrice(){
        console.log(`这个包裹重${this.weight}kg,共收取运输费用${this.calculate()}`);
    }
}

class NormalPackage extends Package{
    constructor(weight:number, public readonly perPrice:number = 5, public readonly extraPrice:number = 3){
        super(weight)
    }
    calculate(): number {
        if(this.weight > 10){
            return 10* this.perPrice + (this.weight -10) * this.extraPrice
        }else {
            return this.weight * this.perPrice
        }
    }
    // override printPrice(){
    //     console.log(`这个包裹重${this.weight}kg,首重10kg,首重单价为${this.perPrice}元,超出首重单价为${this.extraPrice}元,本次共收取运费${this.calculate()}元`);
    // }
}

const p1 = new NormalPackage(6);
p1.printPrice()

const p2 = new NormalPackage(23);
p2.printPrice()