// async function myAsyncFunc() {

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 1000)
// });

// let result = await promise; // wait till the promise resolves

// console.log('test'); 
// console.log(result); // "done!"
// }

// myAsyncFunc();

//////////////////////////////////////////////////////////

// async function myAsyncFunc() {

//   let promise = new Promise((resolve, reject) => {
//       setTimeout(() => resolve("done!"), 1000)
//   });

//   let result = await promise; // wait till the promise resolves
//   console.log(result); // "done!"

//   let promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("ok!"), 1000)
//   });

//   let result2 = await promise2; // wait till the promise resolves
//   console.log(result2); // "done!"
// }

// myAsyncFunc();

//////////////////////////////////////////////////////////

// async function myAsyncFunc() {

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => reject("hata!"), 1000)
// });

// let result = await promise; // wait till the promise resolves

// console.log('test'); 
// console.log(result); // "done!"
// }

// myAsyncFunc().catch(error => console.log(error));

//////////////////////////////////////////////////////////

// async function myAsyncFunc() {

//   try {
//     let promise = new Promise((resolve, reject) => {
//       setTimeout(() => reject("hata!"), 1000)
//     });
    
//     let result = await promise; // wait till the promise resolves
    
//     console.log('test'); 
//     console.log(result); // "done!"
//   } catch(error) {
//     console.log('catch : ', error);
//   }
// }

// myAsyncFunc();