// function func1() { 
//     console.log("function called");
// } 
// func1();

///////////////////////////////////////////////////////////////

// function func2() { 
//     value = 10; 
//     return value; 
// }
// console.log(func2());

///////////////////////////////////////////////////////////////

// function func3(n1,n2) { 
//     var sum = n1 + n2;
//     console.log("The sum of the values entered " + sum);
// } 
// func3(12,13);

///////////////////////////////////////////////////////////////
// using a function expression
// var greetFunc = function(name) {
//     console.log('Hello ' + name);
// };
// greetFunc('John');

///////////////////////////////////////////////////////////////

// using an Immediately Invoked Function Expression (IIFE)
// var greeting = function(name) {
//     return 'Hello ' + name;
// }('John');

// console.log(greeting);
// console.log(typeof greeting); //greeting is string now

///////////////////////////////////////////////////////////////

// var firstname = 'John';

// (function(name) {
//     var greeting = 'Inside IIFE: Hello';
//     console.log(greeting + ' ' + name);
// }(firstname)); // IIFE

///////////////////////////////////////////////////////////////

//with ES6

// function func5(name = "Kerem", surname = "Bodur") {
//     console.log(name + " " + surname);
// }
// func5();
// func5('Mustafa', 'Kemal');

// // Old Style
// function func6(n1,n2) { 
//     n1 = n1 || 1;
//     n2 = n2 || 2;

//     var sum = n1 + n2;
//     console.log("The sum of the values entered " + sum);
// } 
// func6(12,13);
// func6();

///////////////////////////////////////////////////////////////

// function func7(...params) { 
//     console.log('params.length : ' + params.length + ' params : ' + params); 
//     // console.log(typeof params); // dev tool instanceof 
//     console.log(params);
// }  

// func7();  
// func7(5); 
// func7(5, 6, 7); 
// const numbers = [1, 2, 3];
// func7(...numbers);
// // func7(numbers);

// function func8(param, ...params) { //herzaman sonra olacak 
//     console.log('param : ' + param + ' params : ' + params); 
// }  
// func8();  
// func8(5); 
// func8(5, 6, 7); 


///////////////////////////////////////////////////////////////





