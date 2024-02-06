console.log('Hello world!');
//Inheritance
class Animal {
    constructor (name) {
        this.name = name;

    }
    eat() {
        console.log(`${this.name} is eating.`);
    }
}

class Dog extends Animal {
    bark(){
        console.log('Woof woof!');
    }


}


const myDog = new Dog('Buddy');
myDog.bark();
myDog.eat();

class cat extends Animal {
    sound() {
        console.log('Meow');
    }
}
const myCat = new cat('Lady');
myCat.sound();

