// function ogrenciyiBul(src) {
//   return new Promise(function(resolve, reject) {
//     console.log("Ogrenci bulunuyor");

//     setTimeout(function () {
//       console.log("Ogrenci bulundu");
//       resolve("Kerem");
//       // reject("Bulunamadı !");
//     }, 1000);

//   });
// }

// ogrenciyiBul()
//   .then(function (param) {
//     console.log('Sorgular Tamam : ', param);
//   })
//   .catch(hata => {
//     console.log('hata : ', hata);
//   });

//////////////////////////////////////////////////////////

// function sinifiBul(src) {
//   return new Promise(function(resolve, reject) {
//     console.log("Sinif bulunuyor");

//     setTimeout(function () {
//       console.log("Sinif bulundu");
//       resolve(5);
//     }, 2000);

//   });
// }

// function okuluBul(src) {
//   return new Promise(function(resolve, reject) {
//     console.log("Okul bulunuyor");

//     setTimeout(function () {
//       console.log("Okul bulundu");
//       resolve('TED');
//     }, 3000);

//   });
// }

// ogrenciyiBul()
//   .then(()=> {
//       sinifiBul()
//       // console.log('1');
//     })
//   .then(()=> {
//     okuluBul()
//     // console.log('2');
//   })
//   .then(function () {
//       console.log('Sorgular Tamam');
//   });


//////////////////////////////////////////////////////////

// var search = function () {
//     return new Promise(function (resolve, reject) {

//         var time = parseInt(Math.random() * 1000);
//         console.log('time :', time);

//         setTimeout(function () {
//             resolve();
//             console.log("Arama sonlandi. ", time);

//         }, time);

//     });
// }

// Promise.all([search(), search(), search()]).then(function () {
//     console.log("Butun aramalar bitti");
// });


// var search1 = function () {
//   return new Promise(function (resolve, reject) {

//     var time = parseInt(Math.random() * 1000);
//     console.log('time :', time);

//     setTimeout(function () {
//         resolve();
//         console.log("Arama1 sonlandi. ", time);

//     }, time);

//   });
// }

// Promise.race([search1(), search1(), search1()]).then(function () {
//   console.log("Tek bir arama bitti");

// });

//////////////////////////////////////////////////////////


// function myAsynchronous(src) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(() => {
//       let myImage = Math.random() <= 0.5 ? 'Image from: '+ src : false;
  
//       if(myImage){
//         console.log('image arrived');
//         resolve(myImage);
//       } else {
//         console.log('image can not load!');
//         reject(`Image load error for ${src}`);
//       }
//     }, 500);
//   });
// }

// let promise = myAsynchronous('google.com/image.png');

// promise.then(
//   image => console.log(`${image} is loaded!`),
//   error => console.log(`Error: ${error}`)
// );

// myAsynchronous('google.com/image1.png')
//   .then(
//     image => myAsynchronous('google.com/image2.png')
//   )
//   .then(
//     image => myAsynchronous('google.com/image3.png')
//   )
//   .then(
//     image => console.log('scriptler yüklendi, fonksiyonlar artık çağrılabilir')
//   )
//   .catch(error => console.log(error));