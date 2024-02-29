var age, name, location, kerem;

age = 33;
name = "Kerem";
location = "Ankara";

kerem = {name: name, age: age, location: location};
// kerem = {name, age, location};

// console.log(kerem);

/////////////////////////////////////////////////////////////////

// var myObj = { param1: 'Kerem', param2: 33, param3: 'Ankara' }

// var {param1, param2, param3} = myObj;

// console.log("param1", param1, "param2", param2, "param3", param3);

/////////////////////////////////////////////////////////////////

// var myObj = { param1: 'Kerem', param2: 33, param3: 'Ankara' }

// var {param1: ad, param2: yas} = myObj;

// console.log("ad", ad, "yas", yas);

/////////////////////////////////////////////////////////////////

// var name = "ön ad";

// var insan1 = {name: "Ali"};

// var insan2 = {[name]: "Ali"};

// console.log(insan1, insan2);

/////////////////////////////////////////////////////////////////
// Derin destructuring

// var myObj = {
//     isim: 'Havelsan', 
//     adres: {
//                 sehir: 'Ankara',
//                 postaKodu: '06800'
//             }
//     };

// var {adres} = myObj
// var {adres: {postaKodu}} = myObj
// var {adres: {sehir: il}} = myObj


// console.log(adres);
// console.log(postaKodu);
// console.log(il);

/////////////////////////////////////////////////////////////////

// // Array destructuring

// var [renk1, renk2] = ["kirmizi", "beyaz"];

// console.log("renk1", renk1);
// console.log("renk2", renk2);

// var [renk1, renk2] = ["kirmizi", "mavi", "beyaz"];
// console.log("renk1", renk1);
// console.log("renk2", renk2);

// var [renk1, ...kalanRenkler] = ["kirmizi", "mavi", "beyaz"];

// console.log("renk1", renk1);
// console.log("kalanRenkler", kalanRenkler);
