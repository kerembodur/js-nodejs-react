function varTest() {
    var x = 1;
    if (true) {
      var x = 2;
      console.log(x);
    }
    console.log(x);
}








  
function letTest() {
    let x = 1;
    if (true) {
        let x = 2;
        console.log(x);
    }
    console.log(x);
}

varTest();
// console.log('**************************************************');
// letTest();

