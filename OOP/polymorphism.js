console.log('Hello world!');
//Polymorphism

class Animal {
    makeSound(){
        return 'The animal makes a noise';
    }   

}

class Dog extends Animal {
    makeSound() {
        return super.makeSound() + ', the dog barks';
    }
}

class Cat extends Animal {
    makeSound() {
        return super.makeSound() + ', the cat meows';
    }
}

const cat = new Cat()
const dog = new Dog()

console.log(dog.makeSound());
console.log(cat.makeSound());