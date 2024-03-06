// let topla = (a, b) => a + b;

/* ok fonksiyonu aşağıdaki fonksiyon ifadesinin daha özlü yazılmış halidir.:

let topla = function(a, b) {
  return a + b;
};
*/

// console.log( topla(1, 2) ); // 3

///////////////////////////////////////////////////////////////

// aynısı
// let ikiKati = function(n) { return n * 2 }
// let ikiKati = n => n * 2;

// console.log( ikiKati(3) ); // 6

///////////////////////////////////////////////////////////////

// let selamVer = () => console.log("Merhaba!");

// selamVer();

///////////////////////////////////////////////////////////////

// let yas = prompt("Kaç Yaşındasın?", 18);

// let merhaba = (yas < 18) ?
//   () => console.log('Merhaba') :
//   () => console.log("Merhabalar!");

// merhaba();

///////////////////////////////////////////////////////////////

// let toplam = (a, b) => {  // birden fazla satır yazmak için `{` kullanılmalıdır.
//     let sonuc = a + b;
//     return sonuc; // eğer süslü parantez kullanıyorsanız değer döndürmek için return yazmanız gerekmektedir.
// };

// console.log( toplam(1, 2) ); // 3