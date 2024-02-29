// var kullanici = { ad: 'Kerem',  soyad: 'Bodur', yas: 38 }; //object literal
// let kullanici = new Object({ ad: 'Kerem',  soyad: 'Bodur', yas: 38 });
// console.log(typeof kullanici) // object

// console.log(kullanici.ad)      // Kerem
// console.log(kullanici.soyad)   // Bodur
// console.log(kullanici.yas)     // 38

//////////////////////////////////////////////////////////

// kullanici.adress = 'Ankara';
// kullanici['meslek'] = 'Yazılımcı';
// var newKey1 = 'Doğum tarihi';
// var newKey2 = 'tc';
// kullanici[newKey1] = '1985';
// kullanici[newKey2] = '1234567';

// console.log(kullanici);
// console.log(kullanici['Doğum tarihi']);
// console.log(kullanici[newKey2]);
// console.log(kullanici.tc);
//////////////////////////////////////////////////////////

// var calculateAge = function(){
//     return 0;
// }
// console.log(typeof calculateAge) // function

//////////////////////////////////////////////////////////

// const person = {
//     firstName: "Kerem",
//     lastName : "Bodur",
//     id       : 5566,
//     fullName : function() {
//         return this.firstName + " " + this.lastName;
//     }
// };

// console.log(person.firstName);
// console.log(person.fullName());


//Copy////////////////////////////////////////////////////

// let mesaj = "Merhaba!";
// let karsilama = mesaj;

// // karsilama += ' test';

// console.log(mesaj);
// console.log(karsilama);

// const person = {
//     firstName: "Kerem",
//     lastName : "Bodur",
//     id       : 5566,
// };

// const testPerson = person;

// // testPerson.firstName = 'Test';

// console.log(person);
// console.log(testPerson);

//Clone////////////////////////////////////////////////////

// const person = {
//     firstName: "Kerem",
//     lastName : "Bodur",
//     id       : 5566,
// };
// let testPerson = {}; // yeni obje

// tüm özelliklerin bunun içine kopyalanması gerekmekte.
// for (let key in person) {
//     testPerson[key] = person[key];
// }

// bu özellikleri kullanıcıya kopyalamak için
// let testPerson = Object.assign({}, person);

// şu anda klonu tamamen bağımsız durumda
// testPerson.firstName = "Test"; // İçindeki veri değiştirildi.

// console.log( person ); // orninal objede bu hala Mümtaz olarak durmakta.
// console.log( testPerson ); // orninal objede bu hala Mümtaz olarak durmakta.