// Promise olan bir değişkenin değeri değiştirilemez yani immutabledır.
// Sadece bir kere başarılı veya başarısız olurlar.
// Promise oluştururken bize iki adet işlev sunar bunlar resolve ve rejecttir.
// Resolve başarılı durumlar için, reject ise başarısız durumlar için kullanılır.

// Pending: Bu başlangıç aşamasıdır. Bu aşamada bir şey gerçekleşmez. Bu aşama için şöyle düşünebiliriz, müşteri sana bir sipariş verecektir. Ama henüz bir şey sipariş etmemiştir.
// Resolved: Bu aşama ise işlemin sonuçlandığı ve başarılı olduğu aşamadır. Yani müşteri siparişini almış ve memnun kalmıştır.
// Rejected: Bu aşama ise hata ile sonuçlanan aşamadır. İstenen sipariş gelmemiş ve müşteri restoranı terk etmiştir.



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

// function addString(previous, current) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(previous + " " + current);
//     }, Math.floor(Math.random() * 100) + 1);
//   });
// }


// function addAll() {
//   addString("", "A")
//     .then((result) => {
//       return addString(result, "B");
//     })
//     .then((result) => {
//       return addString(result, "C");
//     })
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => console.log(error));
// }
// addAll();

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

// Promise.race([search(), search(), search()]).then(function () {
//   console.log("Tek bir arama bitti");
// });

//--------------
// Promise.all( ), birden fazla promise tek bir then( ) ve catch( ) ile yazılabiliyor. 
// Promise’lerden biri reject( ) olursa direk catch( )’e girer. 
// Tüm Promise başarıyla tamamlanmasını bekler.

// Promise.race( ), ise promiselerden en önce hangi promise tamamlanırsa onun sonucunu alır.

// Promise.allSettled( ), tüm Promise başarılı, başarısız işletimleri bitince 
// sonuçlarını status leri ile birlikte geriye döner.

// Promise.any( ), bu yöntem, yerine getiren ilk promisi döndürmek için kullanışlıdır. 
// Bir promise yerine getirildikten sonra kısa devre yapar, 
// bu nedenle bir resolve olmuş bir promise bulduktan sonra diğer promiselerin tamamlanmasını beklemez.
//--------------

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });
// Expected output: Array [3, 42, "foo"]

//--------------

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 500, 'one');
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'two');
// });

// Promise.race([promise1, promise2]).then((value) => {
//   console.log(value);
//   // Both resolve, but promise2 is faster
// });
// Expected output: "two"

//--------------

// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) =>
//   setTimeout(reject, 1000, 'foo'),
// );
// const promises = [promise1, promise2];

// // Tüm Promise başarılı, başarısız işletimleri bitince sonuçlarını status leri ile birlikte geriye döner.

// Promise.allSettled(promises).then((results) =>   
//   results.forEach((result) => console.log(result)),
// );

//--------------

// const promise1 = Promise.reject(0);
// const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

// const promises = [promise1, promise2, promise3];

// Promise.any(promises).then((value) => console.log(value));

// // Expected output: "quick"

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