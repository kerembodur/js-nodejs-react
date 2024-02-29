export function sayHello() {
  console.log('Hello! I am imported.');
}

// export variables
export var foo = 'bar';
export let counter = 0;
export const SPECIAL_NUM = 5;
 
// export function
export function multiply(x, y) {
  return x * y;
};
 
// export class
export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
 
// without exporting the function remains private to the module
function divide(x, y) {
  return x / y;
}
 
// you can define a function
function sum(x, y) {
    return x + y;
}
  
// and export it later
export { sum }

function total(){
    return "total";
}

export { total as all}



export default function getName() {
    console.log('Kerem')
}
