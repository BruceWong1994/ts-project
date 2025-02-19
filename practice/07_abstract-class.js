"use strict";
class Package {
    constructor(weight) {
        this.weight = weight;
    }
    printPrice() {
        console.log(`这个包裹重${this.weight}kg,共收取运输费用${this.calculate()}`);
    }
}
class NormalPackage extends Package {
    constructor(weight, perPrice = 5, extraPrice = 3) {
        super(weight);
        this.perPrice = perPrice;
        this.extraPrice = extraPrice;
    }
    calculate() {
        if (this.weight > 10) {
            return 10 * this.perPrice + (this.weight - 10) * this.extraPrice;
        }
        else {
            return this.weight * this.perPrice;
        }
    }
}
const p1 = new NormalPackage(6);
p1.printPrice();
const p2 = new NormalPackage(23);
p2.printPrice();
