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
   return 'white';
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

// console.log(runRainbow.next());

// for(let color of rainbow()) { // son eleman isteniyorsa yield kullan
//    console.log(color); 
// } 

// let sequence = [...rainbow()];

// console.log(sequence); 

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

/******************************************************************************* */

// function * fibonacci(seed1, seed2) {
//    while (true) {
//      yield (() => {
//        seed2 = seed2 + seed1;
//        seed1 = seed2 - seed1;
//        return seed2;
//      })();
//    }
//  }
//  const fib = fibonacci(0, 1);
//  console.log(fib.next());
//  console.log(fib.next());
//  console.log(fib.next());


// Lazy Evaluation ile istenen değer daha sonra işletilerek oluşturulur. 
// Bu sayede değeri önceden oluşturmak için CPU harcanmaz. 
// Bu değerler bir bellekte fazladan yer tutulmadığı için Memory Efficient(bellek efektif) çalışmasını sağlar.

// Generator fonksiyonlar oluşturulur ve tüketilir. 
// Tükenen işlenen bir generator tekrar tekrar kullanılamaz tekrardan oluşturulması gerekir. 
// Bir sefer erişilebilir yani.