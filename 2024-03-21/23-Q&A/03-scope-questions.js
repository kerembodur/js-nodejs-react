// (function(x) {
//     return (function(y) {
//         console.log(x);
//     })(2)
// })(1);


//////////////////////////////////////////////////////

// var person = {
//     _name: 'John Doe',
//     getName: function (){
//         return this._name;
//     }
// };

// var personName = person.getName;

// console.log(personName());
// console.log(person.getName());

//////////////////////////////////////////////////////

// (function () {
//     try {
//         throw new Error();
//     } catch (x) {
//         var x = 1, y = 2;
//         console.log("a",x);
//     }
//     console.log("b",x);
//     console.log("c",y);
// })();

//////////////////////////////////////////////////////

// var x = 21;
// var getAge = function () {
//     console.log(x);
//     var x = 20;
// };
// getAge();

//////////////////////////////////////////////////////

// var myObject = {
//     foo: "bar",
//     func: function() {
//         var self = this;
//         console.log("outer func:  this.foo = " + this.foo);
//         console.log("outer func:  self.foo = " + self.foo);
//         (function() {
//             console.log("inner func:  this.foo = " + this.foo);
//             console.log("inner func:  self.foo = " + self.foo);
//         }());
//     }
// };
// myObject.func();

//////////////////////////////////////////////////////

// console.log("0 || 1 = "+(0 || 1));
// console.log("1 || 2 = "+(1 || 2));
// console.log("0 && 1 = "+(0 && 1));
// console.log("1 && 2 = "+(1 && 2));

//////////////////////////////////////////////////////

// function *infiniteNumbers(){
//     let n = 1;
//     while (true){
//         yield n++;
//     }
// }

// const numbers = infiniteNumbers();

// console.log(numbers.next());
// console.log(numbers.next());
// console.log(numbers.next());
// console.log(numbers.next());
// console.log(numbers.next());
// console.log(numbers.next());
// console.log(numbers.next());

//////////////////////////////////////////////////////

// var z = 1, y = z = typeof y;
// console.log(y);

//////////////////////////////////////////////////////

// var output = (function(x){
//   delete x;
//   return x;
// })(0);
  
// console.log(output);

//////////////////////////////////////////////////////

// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this.radius, // Math.PI = 3.14...
// };

// console.log(shape.diameter());
// console.log(shape.perimeter());

//////////////////////////////////////////////////////

// console.log(+true);
// console.log(!'Kerem');

//////////////////////////////////////////////////////

// let c = { greeting: 'Hey!' };
// let d;

// d = c;
// c.greeting = 'Hello';
// console.log(d.greeting);

//////////////////////////////////////////////////////

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const member = new Person('Emrah', 'Ertek');

// Person.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// };

// console.log(member.getFullName());

//////////////////////////////////////////////////////


// function P0e.log(kerem);

//////////////////////////////////////////////////////

function sum(a, b) {
  return a + b;
}

sum(1, '2');