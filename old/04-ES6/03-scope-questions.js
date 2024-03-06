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
// getAge ();

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