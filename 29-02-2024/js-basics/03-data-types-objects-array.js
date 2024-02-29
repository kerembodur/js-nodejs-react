//////////////////////////////////////////////////////////

// köşeli parantez ile (genel kullanılan)
// let arr = [item1, item2...];

// new Array (Çok nadir kullanım)
// let arr = new Array(item1, item2...);

//////////////////////////////////////////////////////////

// var names = ['Ali','Ahmet','Can']
// console.log(typeof names) // object

// console.log(names[0]) // Ali
// console.log(names[1]) // Ahmet
// console.log(names[2]) // Can

//////////////////////////////////////////////////////////

// arr.push(...items) – elemanları sona ekler,
// arr.pop() – sondaki elemanı çıkarır.
// arr.shift() – başlangıçtan eleman çıkarır.
// arr.unshift(...items) – başlangıça eleman ekler.

//////////////////////////////////////////////////////////

// let kullanicilar = [
//     {id: 1, isim: "Kerem"},
//     {id: 2, isim: "Ali"},
//     {id: 3, isim: "Osman"}
// ];
// // ilk iki kullaniciyi döndürür.
// let baziKullanicilar = kullanicilar.filter(eleman => eleman.id < 3);
// console.log(baziKullanicilar);

//////////////////////////////////////////////////////////

// let uzunluklar = ["Bilbo", "Gandalf", "Nazgul"].map(function(elm){
//     return elm.length;
// })
// console.log(uzunluklar);


//////////////////////////////////////////////////////////
// Dizi metodlarının kısa açıklamaları:

// Eleman ekleme/silme metodları:
    // push(...items) – elemanları sona ekler,
    // pop() – en sondaki elemanı alır,
    // shift() – başlangıçtan eleman alır,
    // unshift(...items) – başlangıça eleman ekler
    // splice(pos, deleteCount, ...items) – pos indeksinde deleteCount sayısı kadar elemanı siler ve bunları items'a ekler.
    // slice(start, end) – start ile end pozisyonları arasındaki (end dahil değil) elemanları yeni bir diziye kopyalar.
    // concat(...items) – yeni bir dizi döndürür: var olan dizideki tüm elemanları kopyalar ve items'ı ekler. Eğer items dizi ise bunun elemanları da alınır.
// Elemanları aramaya yönelik metodlar:
    // indexOf/lastIndexOf(item, pos) – pos'tan başlayarak item'ı arar. Bulursa indeksini döndürür, bulamaz ise -1 döndürür.
    // includes(value) – eğer dizi value'ya sahipse true döndürür. Diğer türlü false döndürür.
    // find/filter(func) – Elemanları fonksiyonlar ile filtreler. Buna göre fonksiyonu true yapan ilk veya tamamını döner.
    // findIndex aynı find gibidir fakat bir değer yerine index döner.

// Diziler üzerinde dönüşümler:
    // map(func) – her eleman için func çağrılır ve bunların sonuçlarından bir dizi üretilerek döndürülür.
    // sort(func) – diziyi olduğu yerde sıralar ve döndürür.
    // reverse() – diziyi terse çevirir ve döndürür.
    // split/join – karakterleri diziye çevirir veya dizileri karaktere çevirir.
    // reduce(func, initial) – dizide bulunan elemanlar sıra ile func fonksiyonu üzerinden hesaplanır ve son değer döndürülür.

// Elemanlar üzerinden dönme:
    // forEach(func) – dizide bulunan her eleman için func çağrılır. hiçbir şey döndürmez.

// Ek olarak:
    // Array.isArray(arr) arr'in dizi olup olmadığını kontrol eder.

// Bu metodların içinden sadece sort, reverse ve splice doğrudan dizinin kendisi üzerinden işlem yapar. Diğerleri değer döndürür.


