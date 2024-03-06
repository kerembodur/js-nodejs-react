
// var firstName = 'Kerem';
// console.log(typeof firstName) // string

//////////////////////////////////////////////////////////

// var carName1 = "Volvo XC60";    // çift tırnak
// var carName2 = 'Volvo XC60';    // tek tırnak

// let phrase = `değer gömülebilir ${carName2}`;
// console.log(phrase);

// console.log( `sonuç : ${1 + 2}` ); //sonuç :  3

// let users = `Users:
//  * Kerem
//  * Ali
//  * Osman
// `;

// let users = 'Users:' +
// 'Kerem' +
// 'Ali' +
// 'Osman'

// let users = 'Users:\n' +
// 'Kerem\n' +
// 'Ali\n' +
// 'Osman'

// console.log(users); 

//////////////////////////////////////////////////////////

// var str = "It's alright"; 
// var str = 'It's alright'; 

//////////////////////////////////////////////////////////

// var age = 20; 
// console.log(typeof age)  // number

// var money = 100.5;
// console.log(typeof money)  // number

// number integer, floating point sayıları için kullanılır. 
// Sayılar *, /, + veya - işlemlerine girebilirler. 
// Normal sayıların haricinde “özel sayısal değerler” de sayı olarak tanımlanabilir. 
// Bunlar : Infinity, -Infinity ve NaN gibi değerlerdir.
// Infinity matematiksel Sonsuzluğu ∞ ifade eder. Diğer tüm sayılardan büyük olan özel bir sayıdır.
// 0’a bölünmede sonuç sonsuzu verir:


// console.log( 1 / 0 ); // Infinity
// console.log( Infinity ); // Infinity
// console.log( "( Not a Number) " / 2 ); // NaN, böyle bir bölme işlemi yapılamaz.

// BigInt: az kullanılan bir tip gerekiyorsa araştırılabilir.

//////////////////////////////////////////////////////////

// var isActive = false;
// console.log(typeof isActive) // boolean

//////////////////////////////////////////////////////////
// Ayrıca karşılaştırma sonuçları boolean verir.

// var sonuc = 4 > 1;
// var sonuc = 1 === '1';
// console.log( sonuc );

//////////////////////////////////////////////////////////

// var person = {firstName:"Kerem", lastName:"Bodur", age:38 };
// person = null;   
// console.log(typeof person)

// burada null değer atayarak adresi belli olan nesnenin içerisindeki değeri silmiş oluyoruz. 
// Tanımlanan nesnenin bellek üzerindeki adresi silmiş olmayız.

// typeof null sonucu "object" dir. Aslında yanlış. 
// Bu typeof fonksiyonunun bilinen bir hatasıdır. 
// Eski versiyonlara uygunluk açısından bu şekliyle bırakılmıştır. 
// Yoksa null bir obje değildir. Kendine has bir tiptir. 
// Tekrar söylemek gerekirse bu JavaScript dilinin bir hatasıdır.

//////////////////////////////////////////////////////////

// var person;
// var person = 'Kerem';
// person = undefined;   
// console.log(person)

//////////////////////////////////////////////////////////

// console.log('name' === 'name');
// console.log(Symbol('name') === Symbol('name')); // unique identifier

// const userNameSymbol = Symbol('name');
// const guestNameSymbol = Symbol('name');

// const user = {};
// user[userNameSymbol]= 'Kerem';
// console.log(user);

// const guest = {};
// guest[guestNameSymbol]= 'Ali';
// console.log(guest);

// console.log();

//////////////////////////////////////////////////////////
// Ozet
// Javascript dilinde 8 tane basit tip bulunmaktadır.

// number her türlü sayı için (integer veya floating point)
// bigint isteğe bağlı uzunluktaki tam sayılar içindir.
// string bir veya birden fazla karakter için
// boolean , true/false yani doğru-yanlış değerleri için.
// null bilinmeyen değerler için.
// undefined değer atanmamış değişkenler için.
// object daha karmaşık veri yapıları için.
// symbol eşsiz tanımlamalar için.
// typeof operatörü değişkenin tipini verir.
// İki türlü kullanılabilir: typeof x veya typeof(x)
// Geriye karakter dizisi olarak değişkenin tipini döndürür. Örneğin: "string"
// İstisna olarak null kontrolünde "object" çıktısı verir. Fakat bu dile ait bir hatadır. Normalde null obje değil, kendi başına bir tiptir.


///Primitives Methods/////////////////////////////////////////////////
// Primitive to object to primitive!

// var person = 'Kerem';
// console.log(person.toUpperCase());
// console.log('Kerem'.toUpperCase());
// console.log(person[3]);
// console.log('Kerem'[3]);

//////////////////////////////////////////////////////////

// var myNumber = 123456
// console.log( 123456..toString(36) ); // 2n9c

//////////////////////////////////////////////////////////

// console.log( parseInt('100px') ); // 100
// console.log( parseFloat('12.5em') ); // 12.5

// console.log( parseInt('12.3') ); // 12, sadece tamsayı bölümü alındı
// console.log( parseFloat('12.3.4') ); // 12.3, birinci noktadan sonra yeniden nokta gördüğünde işlemi tamamladı