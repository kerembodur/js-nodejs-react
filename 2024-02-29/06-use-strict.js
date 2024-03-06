// "use strict";

// var myStr = "Hello World!";

// myStr = "Hello World!";

// "use strict"; // yukarıda olduğuna emin ol

// console.log(myStr);

// function myFunc() { 
//     "use strict"; 
//     myMessage = "Hi!  I'm a strict mode script!"; 

//     console.log(myMessage);
//  }
//  myFunc();



/******************************************************************************* */
// Duplicating a parameter name is not allowed:

// function x(p1, p1) {};

/******************************************************************************* */

// var x = 7.89;
// delete x;

/******************************************************************************* */
//dev tool console

const obj = {};
Object.defineProperty(obj, "x", { value: 0, writable: false });

setTimeout(() => {
    console.log("obj1 : ", obj);
    obj.x = 3.14;
    console.log("obj2 : ", obj);
}, 1);

/******************************************************************************* */



/******************************************************************************* */
// Future reserved keywords are not allowed in strict mode. These are:

// implements
// interface
// let
// package
// private
// protected
// public
// static
// yield

// var public = 20;

// Notlar:
// Varsayılan olarak kapalıdır
// "use strict" moda girdiğinizde artık eskiye dönüş yoktur.
// Sıkı mod tüm modern tarayıcılar tarafından desteklenir.