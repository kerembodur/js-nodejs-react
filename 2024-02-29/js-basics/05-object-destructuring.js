// var age, name, location, kerem;

// age = 33;
// name = "Kerem";
// location = "Ankara";

// kerem = {name: name, age: age, location: location};
// // kerem = {name, age, location};

// console.log(kerem);

/////////////////////////////////////////////////////////////////

// var myObj = { param1: 'Kerem', param2: 33, param3: 'Ankara' }

// var {param1, param2, param3} = myObj;

// console.log("param1 :", param1, "param2 :", param2, "param3 :", param3);

// var {param4} = myObj;
// console.log("param4: ", param4);

/////////////////////////////////////////////////////////////////

// var myObj = { param1: 'Kerem' }

// var {param1: name = 'Test', param2 = '33', param3 = 'Ankara'} = myObj;

// console.log("name :", name, "param2 :", param2, "param3 :", param3);

/////////////////////////////////////////////////////////////////

// var myObj = { param1: 'Kerem', param2: 33, param3: 'Ankara' }

// var {param1: ad, param2: yas} = myObj;

// console.log("ad", ad, "yas", yas);

/////////////////////////////////////////////////////////////////

// var name = "ön ad";

// var insan1 = {name: "Ali"};

// var insan2 = {[name]: "Ali"}; // value as key

// console.log(insan1, insan2);

/////////////////////////////////////////////////////////////////
// Deep destructuring

// var myObj = {
//     isim: 'Havelsan', 
//     adres: {
//         sehir: 'Ankara',
//         postaKodu: '06800'
//     }
// };

// var {adres} = myObj
// var {adres: {postaKodu}} = myObj
// var {adres: {sehir: il}} = myObj

// console.log(adres);
// console.log(postaKodu);
// console.log(il);

/////////////////////////////////////////////////////////////////

// let options = {
//     toitle: "Menu",
//     height: 200,
//     width: 100
// };
  
// // title = property named title
// // rest = object with the rest of properties
// let {title, ...rest} = options;

// // now title="Menu", rest={height: 200, width: 100}
// console.log(rest.height);  // 200
// consle.log(rest.width);   // 100

/////////////////////////////////////////////////////////////////
// // Array destructuring

// let myArr = ['Kerem', 'Bodur'];
// let firstName = arr[0];
// let surname = arr[1];

//------------------------

// var [renk1, renk2] = ["kirmizi", "beyaz"];

// console.log("renk1", renk1);
// console.log("renk2", renk2);

//------------------------

// var [renk1, renk2] = ["kirmizi", "mavi", "beyaz"];
// console.log("renk1", renk1);
// console.log("renk2", renk2);

//------------------------

// var [renk1, ...kalanRenkler] = ["kirmizi", "mavi", "beyaz"]; //spread

// console.log("renk1", renk1);
// console.log("kalanRenkler", kalanRenkler);

//------------------------

// let [firstName, surname] = "Kerem Bodur".split(' ');

// console.log("firstName :", firstName);
// console.log("surname :", surname);

//------------------------

// let [a, b, c] = "xyz";
// console.log(a, b, c);

//------------------------

// let [firstName, surname] = [];
// let [firstName = 'kerem', surname = 'Bodur'] = [];
// let [firstName = 'kerem', surname = 'Bodur'] = ['Test', 'User'];

// console.log(firstName); // undefined
// console.log(surname); // undefined

//------------------------