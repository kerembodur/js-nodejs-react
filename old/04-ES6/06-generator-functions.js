"use strict"
function* rainbow() {
   // the asterisk marks this as a generator 
   yield 'red';
   yield 'orange';
   yield 'yellow';
   yield 'green';
   yield 'blue';
   yield 'indigo';
   yield 'violet';
}

const runRainbow = rainbow();
// console.log(runRainbow);
// console.log(runRainbow.next());
// console.log(runRainbow.next());
// console.log(runRainbow.next());
// console.log(runRainbow.next());
// console.log(runRainbow.next());
// console.log(runRainbow.next());
// console.log(runRainbow.next());
// console.log(runRainbow.next());

// for(let color of rainbow()) { 
//    console.log(color); 
// } 

/******************************************************************************* */
//dev tool console

// const waitThenCall = (msg) => {
//    return new Promise((resolve, reject) => {
//       setTimeout(() => { resolve(msg + " success") }, 2000)
//    });
// }

// function* run() {
//    try {
//       const result = yield waitThenCall("Hello1");
//       console.log("result : ", result)
//       const result2 = yield waitThenCall("Hello2");
//       console.log("result2 : ", result2)
//       console.log("Hello")
//    } catch (e) {
//       console.log("e : ", e);
//    }
// }
// const runItr = run();
// runItr.next();