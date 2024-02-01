//Objects

const person = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 25,
    hobbies: ['reading, coding, hiking'],

    greet: function () {
        console.log('Hello, my name is', this.firstName, 'Nice to meet you.');
    }    
}

//Accessing object properties

console.log(person.lastName);
console.log(person.age);

//Modifying object properties
person.lastName = 'Smith';
console.log(person.lastName);

//Accessing object methods
person.greet();

//Adding new properties to the object
person.nationality = 'American';
console.log(person.nationality);

//Adding new methods to the object
person.introduce = function () {
    //Template literals
    console.log(`I am ${this.firstName} ${this.lastName} I am ${this.age}.`);
}
person.introduce ();

//Nesting Objects
const address = {
    street: '123 Main St',
    city: 'New York',
    country: 'USA'
};

person.location = address;
console.log();

//Object destructuring
const { firstName, lastName, age } = person;
console.log(firstName, lastName, age);

console.log(person.hobbies);
