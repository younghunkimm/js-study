'use strict';
// https://developer.mozilla.org/en-US/docs/Web/Javascript/Reference/Global_Objects/Object
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const kyh = { name: 'kyh', age: 4 };
print(kyh);

// with JavaScript magic (dynamically typed language)
// can add properties later
kyh.hasJob = true;
console.log(kyh.hasJob);

// can delete properties later
delete kyh.hasJob;
console.log(kyh.hasJob);

// 2. Computed properties
// key should be always string
console.log(kyh.name);
console.log(kyh['name']);

kyh['hasJob'] = true;
console.log(kyh.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(kyh, 'name');
printValue(kyh, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = makePerson('kyh', 27);
console.log(person4);

function makePerson(name, age) {
  return {
    name,
    age,
  };
}

// 4. Constructor Function
const person5 = new Person('smy', 25);

function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}
console.log(person5);

// 5. in operator: property existence check (key in obj)
console.log('name' in kyh);
console.log('age' in kyh);
console.log('random' in kyh);
console.log(kyh.random);

// 6. for..in vs for..of
// for (key in obj)
for (let key in kyh) {
  console.log(key);
}

// for (value of interable)
const array = [1, 2, 4, 5];
for (let value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'kyh', age: '20' };
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.log(user3);
user3.name = 'smy';
console.log(user);

// new way
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);