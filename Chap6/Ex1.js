
/*
//Prototype
let obj1 = {
    speak(age) {
        console.log(`${this.name} vo dich o tuoi ${age}`)
    }
}
let obj2 = Object.create(obj1) //obj1=obj2
obj2.name = 'Long'
obj2.speak('22')

//Class
function Rabbit(type) {
    this.type = type;
}
Rabbit.prototype.speak = function (line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
};
let weirdRabbit = new Rabbit("weird");
weirdRabbit.speak('2222')
*/
class Vec {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    plus(v) {
        return new Vec(this.x + v.x, this.y + v.y)
    }
    minus(v) {
        return new Vec(this.x - v.x, this.y - v.y)
    }
    length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
    }

}
let newPlus = new Vec(1, 2)
console.log(newPlus.plus(new Vec(2, 3)))
let newMinus = new Vec(1, 2)
console.log(newMinus.minus(new Vec(4, 5)))
let newLength = new Vec(2, 2)
console.log(newLength.length())
