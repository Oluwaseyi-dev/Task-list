// alert('error')

// console.log('error'); 

// var problems
// accepts letters, numbers, _, $
// can't start with a number

// let
// let name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// const
// const name = 'John';
// console.log(name);
// can not reassign
// value has to be assigned

// reference types
// const today = new Date();
// console.log(today);
// console.log(typeof today); 




// const firstName = 'John';
// const lastName = 'William';
// const str = 'hello there. my name is ' + firstName;

// let val;

// //concatenation
// val = firstName + ' ' + lastName;

// //append
// val = 'Seyi ';
// val += 'Odunaike';

// // escaping
// val = 'that\'s awesome, I can\'t wait';

// // concat
// val = firstName.concat(' ',lastName);

// // change case
// val = firstName[0].toUpperCase() + firstName[1];

// // charAt()
// val = firstName.charAt('2');

// // Get last char
// val = firstName.charAt(firstName.length - 1);

// //substring()
// val = firstName.substring(0, 2);

// // slice()
// val = firstName.slice(0, 2);
// val = firstName.slice(-3);

// // split()
// val = str.split(" ");

// // replace()
// val = str.replace('John', 'Jack');

// // includes()
// val = str.includes('');

// console.log(val);





// //math
// const num1 = 100;
// const num2 = 50;
// let val;

// // simple math with numbers
// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;

// // math object
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.5);
// val = Math.ceil(2.2)
// val = Math.floor(2.9);
// val = Math.sqrt(16);
// val = Math.abs(-5);
// val = Math.pow(4, 2);
// val = Math.floor(Math.random() * 20 + 1);


// console.log(val);




// const name = 'John';
// const age = 30;
// const job = 'Web Developer';
// const city = 'Miami';

// // without template strings (es5)
// // html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

// html = '<ul>' +
//        '<li>Name: ' + name + '</li>'
//        '<li>Age: ' + age + '</li>'
//        '<li>Job: ' + job + '</li>'
//        '<li>City: ' + city + '</li>'
//        '</ul>'; 

// // With tempalte strings(es6)
// // ':' is for else

// html = `
//  <ul>
//     <li>Name: ${name}</li>
//     <li>Age: ${age}</li>
//     <li>Job: ${job}</li>
//     <li>City: ${city}</li>
//     <li>${2+2}</li>
//     <li>${age > 30 ? 'over 30' : 'under 30'}</li>
//     <li></li>
//  </ul>
// `;

// document.body.innerHTML = html;



// Create some arrays
// const numbers = [43, 56, 33, 34, 45, 27];
// const numbers2 = new Array(22,45,56,76,83);
// const fruit = ['Apple', 'Orange', 'Banana'];
// const mixed = [22, "Hello", true, undefined, null, new Date()];

// let val;

// // Get array length
// val = numbers.length;
// // check if array
// val = Array.isArray(numbers);
// // Get single value
// val = numbers[3];
// // Insert into array
// numbers[2] = 100
// // Find index of value
// val = numbers.indexOf(45);

// // Mutating arrays
// // // adding to the end of the array
// // numbers.push(250);
// // // adding to the beginning of the array
// // numbers.unshift(120);
// // // take off from end
// // numbers.pop();
// // //take off from beginning
// // numbers.shift();
// // // splice values
// // // first value is where it begins removing
// // // second value is where it ends removing
// // numbers.splice(1, 2);
// // // Reverse
// // numbers.reverse();

// // concatinate arrays
// val = numbers.concat(numbers2);

// // sorting arrays
// val = fruit.sort();
// val = numbers.sort();

// // compare function
// val = numbers.sort(function(x, y){
//     return x - y;
// });

// // reverse sort
// val = numbers.sort(function(x, y){
//     return y - x;
// });


// console.log(numbers);
// console.log(val);



//object literals

// const person = {
//     firstName: 'Steve',
//     lastName: 'Smith',
//     age: 37,
//     email: 'smith@example.com',
//     hobbies: ['music', 'sports'],
//     address: {
//         city: 'Miami',
//         state: 'FL',
//     },
//     getBirthYear: function () {
//         return 2017 - this.age;
//     }
// }

// let val;

// val = [person];
// // Get specific value
// val = person.firstName;
// val = person['lastName'];
// val = person.age;
// val = person.hobbies;
// val = person.address.state;
// val = person.address['city'];
// val = person.getBirthYear();
 

// console.log(val);



// let val;

// const today = new Date();
// let birthday = new Date('10-15-22');
// birthday = new Date('October 15 2022');
// birthday = new Date('10/15/2022');

// val = birthday
// val = today.getMonth();
// val = today.getDate();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime();

// birthday.setMonth(8); 
// birthday.setDate(19);
// birthday.setFullYear(2105);
// birthday.setHours(18);
// birthday.setMinutes(39);
// birthday.setSeconds(32);

// console.log( val);
// console.log(birthday);






// const id = 100;

// // Equal to
// if(id == 100){
//     console.log('correct');
// }else{
//     console.log('incorrect');
// }

// // not equal to
// if(id != 101){
//     console.log('correct');
// }else{
//     console.log('incorrect');
// }

// //equal to value and type
// //if the value and type isnt what it's supposed to be, gives incorrect.

// if(id === 100){
//     console.log('correct');
// }else{
//     console.log('incorrect');
// }

// //equal to value and type
// if(id !== 100){
//     console.log('correct');
// }else{
//     console.log('incorrect');
// }

// // test if undefined
// if(typeof id !== 'undefined'){
//     console.log(`The ID is ${id}`);
// }else{
//     console.log(`No ID`);
// }

// // greater or less than
// if(id <= 100){
//     console.log('correct');
// }else{
//     console.log('incorrect');
// }

// if else

// const color = 'yellow';

// if (color === 'red'){
//     console.log('color is red');
// } else if(color === 'blue'){
//     console.log('color is blue');
// } else{
//     console.log('color is not red or blue');
// }

// // logical operators

// const name = 'steve';
// const age = 20;

// if (age > 0 && age < 12){
//     console.log(`${name} is a child`);
// } else if(age >= 13 && age <= 19){
//     console.log(`${name} is a teenager`);
// }else {
//     console.log(`${name} is an adult`);
// }

// // or||
// if(age < 16 || age > 65){
//     console.log(`${name} can not run in race`);
// } else{
//     console.log(`${name} is registered for the race`);
// }

// // ternary operator
// console.log(id === 100 ? 'correct' : 'incorrect');

// // without braces
// if (id === 100)
//     console.log('correct');
// else
//     console.log('incorrect');




// switch case

// const color = 'green';

// switch(color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue' :
//         console.log('color is blue');
//         break;
//     default :
//     console.log('color is not red or blue');
//     break;
// }

// let day;

// switch(new Date().getDay()) {
//     case 0:
//         day = 'Sunday';
//         break;
//     case 1:
//         day = 'Monday';
//         break;
//     case 2:
//         day = 'Tuesday';
//         break;
//     case 3:
//         day = 'Wednesday';
//         break;
//     case 4:
//         day = 'Thursday';
//         break;
//     case 5:
//         day = 'Friday';
//         break;
//     case 6:
//         day = 'Saturday';
//         break;
// }

// console.log(`Today is ${day}`);




// function declarations

// function greet(firstName = 'John', lastName = 'Doe'){
//     // if (typeof firstName === 'undefined'){ firstName = 'John'; }
//     // if (typeof lastName === 'undefined'){ lastName = 'Doe'; }
//     // console.log('Hello');
//     return 'Hello ' + firstName + ' ' + lastName;
// }

// // console.log(greet());

// // function expressions

// const square = function(x){
//     return x*x;
// };

// // console.log(square(9));


// // immediately invokable function expressions - IIFEs

// (function(name) {
//     console.log('Hello ' + name);
// })('Brad');

// property methods

// const todo = {
//     add: function() {
//         console.log('Add todo...');
//     }
// }

// todo.add();



// FOR LOOP

// for (let i = 0; i <= 10; i++){
//     if(i === 2){
//         console.log('fav number');
//         continue;
//     }

//     if (i === 5){
//         console.log('stop the loop');
//     break;
//     }
//     console.log(i);
// }

//WHILE LOOP

// let i = 0;

// while(i < 10){
//     console.log(i);
//     i++
// }

// DO WHILE

// let i = 0;

// do{
//     console.log(i);
//     i++;
// }

// while(i < 10); 


//LOOP THROUGH ARRAY
// const cars = ['Ford', 'chevy', 'toyoyta', 'mercedes'];
// cars[];

// for(let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }

//FOREACH
// cars.forEach(function(car, index, array) {
//     console.log(`${index} : ${car}`);
//     console.log(array);
// });

// MAP
// const users = [
//     {id: 1, name: 'John'},
//     {id: 2, name: 'Sarah'},
//     {id: 3, name: 'Karen'}
// ];

// const ids = users.map(function(user){
//     return user.id;
// });

// console.log(ids);


//FOR IN LOOP
// const user = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: '40',
// }

// for(let x in user){
//     console.log(`${x} : ${user[x]}`);  
// }


//LOOK AT THE WINDOW
//WINDOW METHODS / OBJECTS / PROPERTIES

// console.log(123);

// alert
// alert('hello world');

// // prompt
// const input = prompt();
// alert(input);

//confirm
// if(confirm('Are you sure?')){
//     console.log('Yes');
// }else{
//     console.log('No');
// }

let val;

//outer height and width
// val = window.outerHeight;
// val = window.outerWidth;

// //inner height and width
// val = window.innerHeight;
// val = window.innerWidth;

// //scroll points
// val = window.scrollY;
// val = window.scrollX;

// //location object
// val = window.location;

// redirect
// window.location.href = 'http://google.com';
// reload
// widow.location.reload();

// history object

// window.history.go(-1);
// val = window.history.length;

// Navigator object
// val = window.navigator;
// val = window.navigator.appName;
// val = window.navigator.appVersion ;

// console.log(val);


// Global scope
var a = 1;
let b = 2;
const c = 3;

function test() {
    var a = 4;
    let b = 5;
    const c = 6;  
    console.log('Function scope: ', a, b, c);
}

test()

console.log('Global scope: ', a, b, c);

