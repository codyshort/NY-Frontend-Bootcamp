const square = (a) => a * a;
console.log('The square of 5 is:',square(5));

const person = {
	name: 'JJ',
	age: 32,

    greet: function (){
        console.log('Hello my name is', this.name, 'and I am');
    }
}

