// (function() {
//     console.log('This is an anonymous function!');
// })();

//////////////////////////////////////////////////////////////////

// setTimeout(function (){
//     console.log('This is an anonymous function!'); 
// },500);

//////////////////////////////////////////////////////////////////


// document.getElementById('div').addEventListener('click', function(){ 
//     console.log('This is an anonymous function!');
// }, false);

//////////////////////////////////////////////////////////////////

// document.body.addEventListener('click', example1);
// document.body.addEventListener('click', example2);

// document.body.removeEventListener('click', example1);
// document.body.removeEventListener('click', example2);

// function example1() {
//     console.log("example1");
// }

// var example2 = function () {
//     console.log("example2");
// }

//////////////////////////////////////////////////////////////////


// var func1 = function(){ return "hello"} 
// console.log(func1()) ;

// var func2 = function(x,y){ return x*y }; 
// console.log(func2(2,3));


//////////////////////////////////////////////////////////////////
// Lambda Functions - Arrow Functions

// setTimeout(() => {
//    console.log('This is an anonymous function!'); 
// }, 1000);

// var msg1 = () => { 
//     console.log("function invoked");
// } 
// msg1();

// var msg2 = (x, y) => { 
//     console.log(x,y);
// } 
// msg2(10,20);

// var msg3 = x => { 
//     console.log(x);
//  } 
//  msg3(10);

// let fn = () => 1;
// console.log(fn());

//  var msg4 = (x, y) => x * y; 
//  console.log(msg4(3, 5));

//birden fazla satır olduğı için {}
// let fn3 = (a,b) => {
//     let c = a + b;
//     return c;
//   }
// console.log(fn3(3, 5));


//////////////////////////////////////////////////////////////////

// function StartCounting() {
//     this.count = 0;
//     this.addCount = function() {
//       this.OneUp = setTimeout(function(){
//         console.log("1 : ", ++this.count); // NaN
//         console.log("2 : ", this); // Window
//       },1000)
//     }
//   }
  
//   var countThisShit = new StartCounting();
//   countThisShit.addCount();


//////////////////////////////////////////////////////////////////
//solution1

//   function StartCounting() {
//     this.count = 0;
//     var self = this; 
//     this.addCount = function() {
//       this.OneUp = setTimeout(function(){
//         console.log("1 : ", ++self.count); // 1
//         console.log("2 : ", self); // StartCounting Object
       
//       },1000)
//     }
//   }
  
//   var countThisShit = new StartCounting();
//   countThisShit.addCount();

//////////////////////////////////////////////////////////////////
//solution2

//   function StartCounting() {
//     this.count = 0;
//     this.addCount = function() {
//       this.OneUp = setTimeout( () => {
//         console.log("1 : ", ++this.count); // 1
//         console.log("2 : ", this); // StartCounting Object
//       },1000)
//     }
//   }
  
//   var countThisShit = new StartCounting();
//   countThisShit.addCount();


//////////////////////////////////////////////////////////////////


// document.body.addEventListener('click', () => {
    
//     this.classList.toggle('on'); // this, Windows nesnesine atanır
//     console.log(this);
// });