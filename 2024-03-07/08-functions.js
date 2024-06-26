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
// let yas = 16; // yaş 16 diyelim.

// if (yas < 18) {
//   merhaba();               // \   (çalışır)
//                            //  |
//   function merhaba() {     //  |
//     console.log("Merhaba!");     //  |  Fonksiyon tanımı bu blok içirisinde her yerden çağırılabilir.
//   }                        //  |
//                            //  |
//   merhaba();               // /   (çalışır)

// } else {

//   function merhaba() {     //  Yaş 16 olduğundan burası hiçbir zaman çalışmaz.
//     console.log("Merhabalar!");
//   }
// }
// // Artık if bloğunun dışında olduğumuzdan dolayı burada fonksiyon tanımlarına ulaşamayız.
// merhaba(); // Error: merhaba tanımlı değil.

//to

// let yas = prompt("Kaç yaşındasın?", 18);

// let merhaba;

// if (yas < 18) {

//   merhaba = function() {
//     console.log("Merhaba!");
//   };

// } else {

//   merhaba = function() {
//     console.log("Merhabalar!");
//   };

// }

// merhaba(); // artık çalışır.

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
// }(firstname)); // IIFE & anonymous

///////////////////////////////////////////////////////////////

// var firstname = 'John';

// function test (){
//     var firstname = "test";
//     // firstname = "test";
// }

// test();
// console.log(firstname);

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

// function selamVer() {
//     console.log("Selam");
//   }
//   console.log(selamVer.name); 

// let selamVer = function() {
//   console.log("Selam");
// }
// console.log(selamVer.name);

// let kullanici = {
//   selamVer() {  },
//   yolcuEt: function() { },
//   elSalla: () => { }
// }

// console.log(kullanici.selamVer.name);
// console.log(kullanici.yolcuEt.name); 
// console.log(kullanici.elSalla.name); 

///////////////////////////////////////////////////////////////
// let more = [1, 2, 3];
// function f1(a) {}
// function f2(a, b) {}
// function many(a, b, ...more) {}

// console.log(f1.length); // 1
// console.log(f2.length); // 2
// console.log(many.length); // 2

///////////////////////////////////////////////////////////////

// let selamVer = function func(kim) {
//   if (kim) {
//     console.log(`Selam, ${kim}`);
//   } else {
//     func("Misafir"); // kendisni yeniden çağırabilir.
//     // selamVer("Misafir");
//   }
// };

// selamVer(); // Selam, Misafir

// Fakat aşağıdaki çalışmayacaktır:
// func(); // func tanımlı değildir. ( Fonksiyonun dışından erişilemez.)


// ----------

// let selamVer = function(kim) {
//   if (kim) {
//     console.log(`Selam, ${kim}`);
//   } else {
//     selamVer("Misafir");
//   }
// };

// let hosGeldin = selamVer;
// selamVer = null;

// hosGeldin(); //Artık selamVer çağırılamaz.

// ----------

// let selamVer = function func(kim) {
//   if (kim) {
//     console.log(`Selam, ${kim}`);
//   } else {
//     func("Misafir"); // Şimdi hepsi doğru şekilde çalışır.
//   }
// };

// let hosGeldin = selamVer;
// selamVer = null;

// hosGeldin(); // Selam, Misafir (iç çağrı çalışır)

///////////////////////////////////////////////////////////////


// function argumanParams() {
//     console.log( arguments.length );
//     console.log( arguments );
//     console.log( arguments[0] );
//     console.log( arguments[1] );
  
//     // Döngüye de alınabilir
//     // for(let arg of arguments) console.log(arg);
//   }
  
//   argumanParams("Kerem", "Bodur");
  
//   // (ikinci bir argüman yok.)
//   argumanParams("Emrah");





