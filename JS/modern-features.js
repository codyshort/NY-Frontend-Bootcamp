//Modern JS features

function greet (){
    console.log('Hello');
}

//Arrow functions
const greeting = () => {
    console.log('Hello');
}

const square = (a) => a * a;
console.log(square(5));

//Enhanced object literals
const person = {
	name: "TJ",
	age: 21,

    greeting(){
        //code block
    }
}

//spread and rest operators
//Rest
function myFunction(firstArg, ...restOfArgs) {
    console.log(firstArg);
    console.log(restOfArgs);
}

myFunction('one', 'two', 'three', 'four');

//spread
function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 4];
console.log(sum(...numbers));

//Common built-in methods
//arrays
//filter
let nums =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const even = nums.filter((number) => number % 2 == 0 );
console.log(even);


const odd = nums.filter((number) => number % 2 == 1 );
console.log(odd);

//strings
//split

const message = 'Hello, world!';
const words = message.split (', ');
console.log(words);

//includes
const sentence = 'the quick brown fox jumps over the lazy dog.';
const containsWord = sentence.includes('fox');
console.log(containsWord);

//length 
const sampleString = 'Welcome to modern JS features';
console.log(sampleString.length);

//Objects
//keys
const keys = Object.keys(person);
console.log(keys);

//values
const values = Object.values(person);
console.log(values);

//Math
//max and min
console.log(Math.max(10, 5, 20));
console.log(Math.min(10, 5, 20));

//Rounding
console.log(Math.round(3.6));

//floor
console.log(Math.floor(3.6));

//ceiling
console.log(Math.ceil(3.1));

//random
console.log(Math.random());

//nested math methods
console.log(Math.round(Math.random() * 100));

// Other Methods
//to fixed
const pi = 3.141592;
console.log(pi.toFixed(3));

//date
const currentDate = new Date();
console.log(currentDate);

const christmas = new Date(2024, 11, 25);
console.log(christmas);

// toString
const numString = 38;
const parsedString = numString.toString();
console.log(parsedString + 1);