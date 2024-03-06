function varTest() {
    var x = 1;
    if (true) {
      var x = 2;  // same variable!
      console.log(x);  // 2
    }
    console.log(x);  // 2
}
  
function letTest() {
    let x = 1;
    if (true) {
        let x = 2;  // different variable
        console.log(x);  // 2
    }
    console.log(x);  // 1
}

varTest();
// console.log('**************************************************');
// letTest();

////////////////////////////////////////////////////////////////////////////

for (var i = 0; i<10; i++) {
    // do something   
}
// console.log(i);

for (let j = 0; i<10; i++) {
    // do something
}
// console.log(j); // does not work


const age = 30;
// const age = 31; // does not work // Syntax error

const number = 10;
// number += 1; // does not work // Syntax error

const myObj = {name: 'Kerem'};
// myObj.name = 'test';
// myObj.surname = 'Bodur';
// myObj = {age: '40'};

// console.log('myObj :', myObj);

// const myArray = [1,2,3];
// myArray[0] = 9;
// myArray = [];
// console.log('myArray : ', myArray);