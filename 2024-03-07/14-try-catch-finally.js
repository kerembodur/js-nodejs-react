// try {
//     // bu kodu çalıştır
//   } catch (err) {
//     // eğer hata varsa, buraya atla
//     // err hata objesi
//   } finally {
//     // try/catch'den sonra her halükarda burayı çalıştır.
//   }

///////////////////////////////////////////////////////////////


let json = '{ "age": 30 }';
// let json = "{ bad json }";

try {

  let user = JSON.parse(json); 

  // if (!user.name) {
  //   throw new SyntaxError("Tanımlanmamış veri:isim yok"); 
  // }

  console.log( user ); 
  // console.log( user.name ); 

} catch (e) {
  console.log( "Kusura bakmayın, veride hata var. Talep tekrar yapacaktır" );
  console.log( e.name );
  console.log( e.message );
} finally {
  console.log( "try/catch'den sonra her halükarda burayı çalıştır." );
}
    