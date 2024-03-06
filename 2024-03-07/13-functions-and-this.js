// let user = {
//   name: "Kerem",
//   age: 33,
//   sayHi() {
//     console.log('Hi', this.name);
//     console.log('Hi', user.name);  // kullanımı uygun değil. başka biryerde obje değişmiş olabilir.
//     console.log(this);
//   }

// };

// user.sayHi();

///////////////////////////////////////////////////////////////
// this'in değeri çalışma anında değerlendirilir. Her şey olabilir.

// let kullanici = { isim: "Kerem" };
// let yonetici = { isim: "Ahmet" };

// function selamVer() {
//   console.log( this.isim );
// }

// kullanici.f = selamVer;
// yonetici.f = selamVer;

// kullanici.f(); 
// yonetici.f(); 

// yonetici['f'](); 

// NOT: 'use strict' modda this undefined döndürür. Eğer this.isim yazılırsa hata verir.
// Normal modda ise this değeri global obje olur. 
// Tarayıcı için bu windowdur.

///////////////////////////////////////////////////////////////

// let user = {
//   name: "Kerem",
//   age: 33,
//   sayHi: () =>  {
//     console.log('Hi', this.name);
//     console.log(this);
//   }

// };

// user.sayHi();

///////////////////////////////////////////////////////////////

// Soru ?

// let group = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],
//   showList() {
//     this.students.forEach(
//       student => console.log(this.title + ': ' + student) // Çıktı ne olur
//     );
//   }
// };

// group.showList();

///////////////////////////////////////////////////////////////
// function User (){
//   this.name = 'Kerem';
//   this.age = 39;
//   this.birthDate = function (){
//     return new Date().getFullYear() - this.age;
//   }
// }

// let User = () => {
//   this.name = 'Kerem';
//   this.age = 39;
//   this.birthDate = function (){
//     return new Date().getFullYear() - this.age;
//   }
// }

// let person = new User();

// console.log(person.birthDate());

//////////////////////////////////////////////////////////////////

// function StartCounting() {
//   this.count = 0;
//   this.addCount = function() {
//     this.OneUp = setTimeout(function(){
//       console.log("1 : ", ++this.count); // NaN
//       console.log("2 : ", this); // Window
//     },1000)
//   }
// }

// var countThisShit = new StartCounting();
// countThisShit.addCount();

//////////////////////////////////////////////////////////////////
//solution1

  // function StartCounting() {
  //   this.count = 0;
  //   this.addCount = function() {
  //     this.OneUp = setTimeout(function(){
  //       console.log("1 : ", ++this.count); // 1
  //       console.log("2 : ", this); // StartCounting Object
  //     }.bind(this),1000)
  //   }
  // }

  // var countThisShit = new StartCounting();
  // countThisShit.addCount();


//////////////////////////////////////////////////////////////////
//solution2

  // function StartCounting() {
  //   this.count = 0;
  //   var _this = this; 
  //   this.addCount = function() {
  //     this.OneUp = setTimeout(function(){
  //       console.log("1 : ", ++_this.count); // 1
  //       console.log("2 : ", _this); // StartCounting Object
  //     },1000)
  //   }
  // }

  // var countThisShit = new StartCounting();
  // countThisShit.addCount();

//////////////////////////////////////////////////////////////////
//solution3

  // function StartCounting() {
  //   this.count = 0;
  //   this.addCount = function() {
  //     this.OneUp = setTimeout( () => {
  //       console.log("1 : ", ++this.count); // 1
  //       console.log("2 : ", this); // StartCounting Object
  //     },1000)
  //   }
  // }

  // var countThisShit = new StartCounting();
  // countThisShit.addCount();

//////////////////////////////////////////////////////////////////
// arguman bağlama - partial function

// function multi(a, b) {
//   return a * b;
// }

// let double = multi.bind(null, 2);

// console.log( double(3) ); // = multi(2, 3) = 6
// console.log( double(4) ); // = multi(2, 4) = 8
// console.log( double(5) ); // = multi(2, 5) = 10