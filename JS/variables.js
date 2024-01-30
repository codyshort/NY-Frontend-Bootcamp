console.log("Hello World!");

//Variables - store data values

//var - global variable


if (true) {
    var name = "John";
}

name = "Gab"
console.log(name);


//const - fixed value
const birthday = "June 23";
//birthday = "July 1" - will throw error, one value only with const

//let - blocks scoped variable

if (true) {
    let x = 23;
    console.log(x);
}

//console.log(x) - will throw an error, outside statement block