// let myImage;
// function myAsynchronous(src) {

//   setTimeout(() => {
//     myImage = 'Image from: '+ src;
//     console.log('image arrived');
//   }, 2000);

// }

// myAsynchronous('google.com/image.png');

// console.log(myImage);

//----------------------------------------

// function myAsynchronous(src, callback) {

//   setTimeout(() => {
//     let myImage = 'Image from: '+ src;
//     console.log('image arrived');
//     callback(myImage);
//   }, 2000);
  
// }

// myAsynchronous('google.com/image.png', function(image){
//   console.log(image, ' --- do something');
// });

//----------------------------------------

// myAsynchronous('google.com/image1.png', function(image){
//   console.log(image, ' --- do something');

//   myAsynchronous('google.com/image2.png', function(image){
//     console.log(image, ' --- do something');

//     myAsynchronous('google.com/image3.png', function(image){
//       console.log(image, ' --- do something');
//     });
//   });
// });

//////////////////////////////////////////////////////////
//with error handle

// function myAsynchronous(src, callback) {

//   setTimeout(() => {
//     let myImage = Math.random() <= 0.5 ? 'Image from: '+ src : false;

//     if(myImage){
//       console.log('image arrived');
//       callback(false, myImage);
//     } else {
//       console.log('image can not load!');
//       callback(true, myImage );
//     }
//   }, 500);
  
// }

// myAsynchronous('google.com/image1.png', function(error, image){
//   // error-first callback
//   if(error){
//     console.log('error : ', error);
//   } else {
//     console.log(image, ' --- do something');-
//   }
// });

// myAsynchronous('google.com/image1.png', function(error, image){
//   if(error){
//     console.log('error : ', error);
//   } else {
//     console.log(image, ' --- do something');

//     myAsynchronous('google.com/image2.png', function(error,image){
//       if(error){
//         console.log('error : ', error);
//       } else {
//         console.log(image, ' --- do something');

//         myAsynchronous('google.com/image3.png', function(error,image){
//           if(error){
//             console.log('error : ', error);
//           } else {
//             console.log(image, ' --- do something');
//           }
//         });
//       }
//     });
//   }
// });

//////////////////////////////////////////////////////////


