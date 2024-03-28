import ld from 'lodash';

const users = [
    { 'user': 'Emrah',   'age': 48 },
    { 'user': 'Fatma', 'age': 36 },
    { 'user': 'Kerem',   'age': 40 },
    { 'user': 'Nilay', 'age': 34 }
  ];

export default function myComponent(){

    const sorted = ld.sortBy(users, ['age']);

    console.log('I am a component');

    console.log(sorted);

}