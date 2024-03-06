
// var ogrenciyiBul = new Promise(function (resolve, reject) {
//     console.log("Ogrenci bulunuyor");

//     setTimeout(function () {
//         console.log("Ogrenci bulundu");
//         resolve("Kerem");
//         // reject("Bulunamadı !");
//     }, 1000);

// });

// ogrenciyiBul
//     .then(function (param) {
//         console.log('Sorgular Tamam : ', param);
//     })
//     .catch(hata => {
//         console.log('hata : ', hata);
//     });

//////////////////////////////////////////////////////////

// var sinifiBul = new Promise(function (resolve, reject) {

//     console.log("Sinif bulunuyor");

//     setTimeout(function () {
//         console.log("Sinif bulundu");
//         resolve(5);
//     }, 2000);

// });


// var okuluBul = new Promise(function (resolve, reject) {

//     console.log("Okul bulunuyor");

//     setTimeout(function () {
//         console.log("Okul bulundu");
//         resolve('TED');
//     }, 3000);

// });

// // var isim, sinif, okul;
// ogrenciyiBul
//     .then(sinifiBul)
//     .then(okuluBul)
//     .then(function () {
//         console.log('Sorgular Tamam');
//     });


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


var search1 = function () {
    return new Promise(function (resolve, reject) {

        var time = parseInt(Math.random() * 1000);
        console.log('time :', time);

        setTimeout(function () {
            resolve();
            console.log("Arama1 sonlandi. ", time);

        }, time);

    });
}




Promise.race([search1(), search1(), search1()]).then(function () {
    console.log("Tek bir arama bitti");

});
