import example from './images/Triumph.jpg';
import './styles.css';

import myComponent from './myComponent';

console.log('Interesting!');

// Create a class property without a constructor
class Bike {
    name = 'Triumph!';
}

const myBike = new Bike()
// Create paragraph node
const p = document.createElement('p');
p.textContent = `I like ${myBike.name}.`;


// Create heading node
const heading = document.createElement('h1');
heading.textContent = 'Interesting!!!';

// Create image
const img = document.createElement('img');
img.src = example;

// Append heading node to the DOM
const app = document.querySelector('#root');
app.append(heading);
app.append(p);
app.append(img);

myComponent();


