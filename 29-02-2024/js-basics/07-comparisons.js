// console.log( 'Z' > 'A' ); // doğru ( true )
// console.log( 'Kum' > 'Kan' ); // doğru ( true )
// console.log( 'Bee' > 'Be' ); // doğru ( true )
// console.log( 'BEe' > 'Be' ); // doğru ( true )

//////////////////////////////////////////////////////////

// console.log( '2' > 1 ); // doğru, karakter olan `2` sayıya çevrilerek 2 olmuş ve böyle karşılaştırılmıştır.
// console.log( '01' == 1 ); // doğru, karakter olan '01' sayıya çevrilerek 1 olmuştur.

//////////////////////////////////////////////////////////

// console.log( true == 1 ); // true ( doğru )
// console.log( false == 0 ); // true ( doğru )

//////////////////////////////////////////////////////////

// let a = 0;
// console.log( Boolean(a) ); // false

// let b = "0";
// console.log( Boolean(b) ); // true

// console.log(a == b); // true!

//////////////////////////////////////////////////////////

// console.log( 0 == false ); // true
// console.log( '' == false ); // true

// console.log( 0 === false );
// console.log( '' === false ); 

//////////////////////////////////////////////////////////

// console.log( null === undefined ); // false
// console.log( null == undefined ); // true


// Matematiksel karşılaştırmalar için < > <= >= null/undefined sayıya çevrilirler. 
// null 0 olurken undefined NaN( not a number ) olur.

// console.log( null > 0 );  // (1) false
// console.log( null == 0 ); // (2) false
// console.log( null >= 0 ); // (3) true

// console.log( undefined > 0 ); // false (1)
// console.log( undefined < 0 ); // false (2)
// console.log( undefined == 0 ); // false (3)