//Control Flow Structures
//Control Statements

//Conditionals if
//if statement
let age = 15;
if (age >= 18) {
    console.log ("You are eligible to vote!")
} else {
    console.log ("You are not eligible to vote!")

}


//if-else statement mulitple conditions
let temperature = 20;
if (temperature < 0) {
    console.log ("Its freezing!")
} else if (temperature >= 0 && temperature < 20) {
    console.log ("Its cold outside");
} else {
    console.log ("Its warm day!");
}



//Conditionals: Switch statement
let day = "Monday";

switch (day) {
    case "Monday"
        console.log ("Its the start of the week");
        break;
    case "Friday";
        console.log ("Its the end of the week");
        break;
    default:
        console.log ("Its a regular day");

}
