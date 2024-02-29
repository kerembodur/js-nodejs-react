// var myVar
// console.log(myVar)

// var myVar = "Hello";
// console.log(myVar);

// myVar = "Hello";
// console.log(myVar);

// //to 

// var myVar = "Hello";
// console.log(myVar);

//////////////////////////////////////////////////////////

// console.log(greeter);
// var greeter = "say hello"

// //to

// var greeter;
// console.log(greeter); // greeter is undefined
// greeter = "say hello"

//var variables are hoisted to the top of their scope and initialized with a value of undefined.

//////////////////////////////////////////////////////////

// var a = "hello";
// var a = "hi!";

//or 

// a = "hi!";
// console.log(a);

//////////////////////////////////////////////////////////
//Dynamic type
// var myVar = "hello";
// var myVar = 123;
// var myVar = {a:'test1', b:'test2'};
// console.log(myVar);

//////////////////////////////////////////////////////////

// myVar = "hello";
// console.log(myVar);
// var myVar 

// //to

// var myVar ;
// myVar = "hello";
// console.log(myVar);

//////////////////////////////////////////////////////////

// var greeter = "hey hi";

// if (true) {
//     var greeter = "say Hello instead";
// }

// console.log(greeter); // "say Hello instead"

//So, since times > 3 returns true, greeter is redefined  to "say Hello instead". 
//While this is not a problem if you knowingly want greeter to be redefined, 
//it becomes a problem when you do not realize that a variable greeter has already been defined before.
//If you have used greeter in other parts of your code, you might be surprised at the output you might get. 
//This will likely cause a lot of bugs in your code. This is why let and const are necessary.

// let greeter = "hey hi";

// if (true) {
//     let greeter = "say Hello instead";
// }

// console.log(greeter) // "say Hello instead"

//////////////////////////////////////////////////////////

// let greeter = "hey hi";
// let greeter = "hello";
// console.log(greeter);

//////////////////////////////////////////////////////////

// let greeter = "hey hi";
// greeter = "hello";
// console.log(greeter);

//////////////////////////////////////////////////////////

// const greeting = "say Hi";
// const greeting = "say Hello instead";// error: Identifier 'greeting' has already been declared
// console.log(greeting);

//////////////////////////////////////////////////////////

// const greeting = "say Hi";
// greeting = "say Hello instead";// error: Assignment to constant variable. 
// delete greeting;
// console.log(greeting);
//////////////////////////////////////////////////////////

// const greeting = {
//     message: "say Hi",
//     times: 4
// }

// greeting.message = "say Hello instead";

// console.log(greeting);

//////////////////////////////////////////////////////////

// var greetingA;
// let greetingB;
// const greetingC;

//While var and let can be declared without being initialized, const must be initialized during declaration.