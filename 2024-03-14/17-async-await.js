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
// console.log(result); 
// }

// myAsyncFunc().catch(error => console.log(error));

//&&

// myAsyncFunc()

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

//////////////////////////////////////////////////////////

// function addString(previous, current) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(previous + " " + current);
//       }, Math.floor(Math.random() * 100) + 1);
//     });
//   }

// async function addAll() {
//   let toPrint;

//   toPrint = await addString("", "A");
//   toPrint = await addString(toPrint, "B");
//   toPrint = await addString(toPrint, "C");

//   console.log(toPrint);
// }

// addAll(); //Output: A B C

//////////////////////////////////////////////////////////

// async function sendRequest(id, prev = "") {
//   const response = await fetch(
//     `https://604b3120ee7cb900176a185c.mockapi.io/words/${id}`
//   );
//   const jsonResponse = await response.json();
//   console.log(jsonResponse);
//   return prev + " " + jsonResponse.value;
// }

// async function getAll() {
//   const response1 = await sendRequest(1);
//   const response2 = await sendRequest(2, response1);
//   const response3 = await sendRequest(3, response2);
//   console.log("getAll :>>", response3);
// }

// getAll();