"use strict";

// const b = 10;
// a = b * 2;
// console.log(a);

// console.log("hello goiteens".toLocaleUpperCase());

// var b = 10;
// var age = 13;

// let age = 18;
// age = 19;
// console.log(age);

// const b = true;
// console.log(b);

// let userName = false;
// console.log(typeof userName)

// const text = "Hello";
// confirm(text);

// const text = prompt("Умови погоджуєте?");
// console.log(text);

// const x = 5;
// const y = 2;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);

// let a = 5;
// a += 10;
// console.log(a)

// let b = 20;
// b += 10;
// console.log(b)

// let c = 8;
// let d = 17;
// console.log(c * d);

// const x = 5;
// const y = 2;
// const z = 5;

// console.log(x <= z);
// console.log(x > y);
// console.log(x < y);
// console.log(x >= z);

// console.log(x == y);
// console.log(x == z);
// console.log(x != z);
// console.log(x === z);

// const a = '5';
// console.log(Number(a));
// console.log(typeof Number(a));

// const b = 'hello';
// console.log(Number(b));

// const a = '5';
// console.log(typeof Number(a));

// const b = 'hello';
// console.log(Number(b));

// console.log(Number.parseInt('20px'));
// console.log(Number.parseInt('3.14haha'));

// console.log(Number.parseFloat('12.57haha'));

// console.log(Number.parseFloat('3.84x'));

// const a = Number('20');
// console.log(Number.isNaN(a));

// const b = Number('hello');
// console.log(Number.isNaN(b));

// console.log(0.1 + 0.2 === 0.3);
// console.log(0.1 + 0.2);

// console.log((0.1 * 10 + 0.2 * 10) / 10 );

// console.log(Math.floor(2.4));
// console.log(Math.ceil(2.4));
// console.log(Math.round(2.4));

// console.log(Math.max(4, 2, 1.4));
// console.log(Math.min(4, 2, 1.4));

// console.log(Math.round(Math.random()*(10 - 1) + 1));

// const a = 'hello' + 'GoIteens';
// console.log(typeof a);

// let b = 5 + '8';

// let b = '5' + 5 + 5;
// console.log( b);

// let b = 'hello goiteens';
// console.log(b.includes('hello'));
// console.log(b.includes('hel1o'));

// const b = 'hello goiteens';
// console.log(b.startsWith('hell'));
// console.log(b.endsWith('ns'));

// const b = 'hello goiteens';
// console.log(b.padStart(18, 'yeah'));
// console.log(b.padEnd(19, 'yeah'));
// console.log(b.length);

// const y = 'hello                         ';
// console.log(y);
// console.log(y.trim());

// const name = 'bohdan';
// const age = 13;
// const message = 'My name is' + ' ' + name + ',' + ' i`m' + ' ' + age + '!';
// console.log(message);

// const sameMessage = `My name is ${name}, i'm ${age}!`;
// console.log(sameMessage);

// let value = 1;
// let boolValue = Boolean(value);
// console.log(boolValue)

// const number = 15;
// const result = number > 10 && number < 20;
// console.log(result);

// const number = 15;
// const result = number > 16 && number < 20;
// console.log(result);

// const number = 15;
// const full = number < 20 || number > 30;
// console.log(full);

// let a = 0;
// const b = 'pro';
// if (b === 'pro'){
//     a = 100;
// }
// console.log('cost = ' + a);

// let a = 0;
// const b = "normal";
// if (b === "pro") {
//   a = 100;
// }
// else {
//   a = -100;
// }
// console.log("a = " + a);

// let a;
// const b = 'premium'
// if (b === 'normal'){
//     a = 0;
// }
// else if (b === 'pro'){
//     a = 100
// }
// else if (b === 'premium'){
//     a = 400
// }
// else{
//     console.log('not funded')
// }
// console.log('a = ' + a)

// let a = prompt('Ваша підписка:');
// let free = 'free';
// let pro = 'pro';
// let vip = 'vip';
// if (a === pro || a === vip){
//     console.log('Вхід дозволено')
// }
// else{
//     console.log('Вхід не дозволено')
// }

// let type;
// const age = 19;
// if (age >= 18){
//     type = 'adult'
// }
// else{
//     type = 'child'
// }
// const age = 19;
// const type = age >= 18 ? "adult" : "child";
// console.log(type);

// const num1 = 10;
// const num2 = 20;
// let bigger;
// if (num1 > num2){
//     bigger = num1;
// }
// else{
//     bigger = num2;
// }
// const bigger = num1 > num2 ? num1 : num2;
// console.log(bigger);

// const input = prompt('Please, print your number');
// if (input > 0){
//     console.log('1')
// }
// else if (input < 0){
//     console.log('-1')
// }
// else{
//     console.log('0')
// }

// let result;
// if (a + b < 4) {
//   result = "Нижче";
// } else {
//   result = "Вище";
// }

// const a = 5;
// const b = 2;
// const result = (a + b < 4) ? 'Нижче' : 'Вище';
// console.log(result)

// let cost;
// const sub = 'premium';
// switch (sub){
//     case 'free':
//         cost = 0;
//         break;
//     case 'pro':
//         cost = 50;
//         break;
//     case 'premium':
//         cost = 200;
//         break;
//     default:
//         console.log('I have no answer');
// }
// console.log(cost);

// let a = parseInt(prompt('Your number:'));
// let b;
// switch (a){
//     case 0:
//         b = 0;
//         break;
//     case 1:
//         b = 1;
//         break;
//     case 2:
//         b = 2;
//         break;
//     case 3:
//         b = 3;
//         break;
//     default:
//             console.log('uups')
// }
// console.log(b)

// if (browser == "Edge") {
//   p.textContent = "You've got the Edge!";
// }
// else if (
//   browser == "Chrome" ||
//   browser == "Firefox" ||
//   browser == "Safari" ||
//   browser == "Opera"
// ) {
//   p.textContent = "Ми підтримуємо і ці браузери";
// }
// else {
//   p.textContent = "Маємо надію, що ця сторінка виглядає добре!";
// }

// let a = prompt('Your browser: ')
// let p;
// switch (a){
//     case "Edge":
//         p = "You've got the Edge!";
//         break;
//     case "Chrome":
//     case "Firefox":
//     case "Safari":
//     case "Opera":
//         p = "Ми підтримуємо і ці браузери";
//         break;
//     default:
//         alert("Маємо надію, що ця сторінка виглядає добре!")
// }
// console.log(p)

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// if (isOnline === true && isFriend === true && isDnd === false){
//     alert('You can open chat');
// }
// else{
//     alert('You cann`t open chat');
// }

// const x1 = 10;
// const x2 = 30;
// const number = 45;
// if (x1 < number && number < x2){
//     alert('It`s correct')
// }
// else{
//     alert('It`s incorrect')
// }

// const stars = 4;
// let price;

// if (stars === 1){
//     price = 20;
// }
// else if (stars === 2){
//     price = 30;
// }
// else if (stars === 3){
//     price = 100;
// }
// else if (stars === 4){
//     price = 200;
// }
// else if (stars === 5){
//     price = 500;
// }
// else{
//     console.log('I found nothing')
// }

// switch (stars) {
//   case 1:
//     price = 20;
//     break;
//   case 2:
//     price = 30;
//     break;
//   case 3:
//     price = 100;
//     break;
//   case 4:
//     price = 200;
//     break;
//   case 5:
//     price = 500;
//     break;
//   default:
//     console.log("I found nothing");
// }

// console.log(price + "$");

// let height = 151;
// if (true){
//     let weight = 60;
//     console.log(weight);
//     console.log(height)
// }
// console.log(height)
// console.log(weight)

// const b = 15;

// if (true){
//     const b = 10;

//     console.log(a);
//     console.log(b);
// }

// let number = 0;
// while (number < 10){
//     console.log('number: ', number)
//     number += 1
// }

// let clientCounter = 10;
// const maxClient = 20;

// while (clientCounter < maxClient){
//     alert(clientCounter);
//     clientCounter += 1;
// }

// let pass = '';
// do{
//     pass = prompt('Your password (< 5 symbols)', '');
// }
// while(pass.length < 6);
// console.log('password: ', pass)

// const max = 5;
// for (let i = 0; i < max; i += 1){
//     console.log(i);
// }

// const num = 3;
// let sum = 0;

// for (let i = 0; i <= num; i += 1){
//     sum += i;
// }
// console.log(sum)

// for (let i = 10; i < 10; i += 1){
//     if (i === 6){
//         break;
//     }
// }

// const sum = 10;
// for (let i = 0; i < sum; i += 1){
//     if (i % 2 === 0){
//         continue;
//     }
//     console.log(i)
// }

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const frut = ['Apple', 'Banana', 'Orange'];
// frut[0] = 'Kiwi'
// console.log(frut)
// console.table(frut)

// const arr = ['dog', 'cat', 'mouse']

// arr[10] = 'crocodile'
// console.table(arr)

// const lIndex = arr.length - 1
// console.log(lIndex)

// const mass = ['lol', 1, true];
// console.log(mass);
// console.log('massive length: ', mass.length);
// console.log(mass[2]);
// mass[2] = false;
// console.log(mass);
// console.log(mass[2]);

// const Arr1 = [1, 5, '4', 'hello'];
// const Arr2 = [true, 2, {}, ['a'], 222];
// console.log(Arr1[1]);
// console.log(Arr2[1]);
// console.log(Arr1[1] + Arr2[1]);

// const cars = ['Mini', 'Škoda', 'Mclaren', 'Formula 1', 'Tesla']
// console.log(cars[0])
// console.log('massive length: ',cars.length)
// cars[5] = 'Bently'
// console.log(cars)

// const names = ['Volodya', 'Bodya', 'Sasha'];

// for (let i = 0; i < names.length; i += 1){
//     console.log('Names: ', names[i]);
// }

// const names = ['Volodya', 'Bodya', 'Sasha'];

// for (const name of names){
//     console.log(name)
// }

// const names = ['Volodya', 'Bodya', 'Sasha'];

// const find = 'Sasha';
// let message;
// for (const name of names){
//     if (name === find){
//         message = 'It`s you!';
//         break;
//     }
//     message = 'Not found';
// }
// console.log(message)

// const nums = [12, 15, 80, 50, 44, 13]
// const summa = 15;
// for (let i = 0; i < nums.length; i ++){
//     if (nums[i] < summa){
//         continue;
//     }
//     console.log(nums[i])
// }

// const arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// console.log(arr[1][1])

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;
// for (let i = 0; i < cart.length;  i++){
//     total += cart[i]
// }
// console.log(total)

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     total += numbers[i];
//   }
// }
// console.log(total);

// const str = 'String lol lol'
// console.log(str.split(''))

// const arr = ['Lyosha', 'Grisha', 'Petya']
// console.log(arr.join('; '))

// const arr = ['Lyosha', 'Grisha', 'Petya']
// console.log(arr.indexOf('Petya'))

// const arr = ['Lyosha', 'Grisha', 'Petya']
// console.log(arr.includes('Petya'))

// const arr = ['Lyosha', 'Grisha', 'Petya']
// console.log(arr.includes('Petya'))

// const fruts = ["banana", "strawberry", "cherry"];
// const frut = "banana";
// if (fruts.includes(frut)) {
//   alert("Yes");
// } else {
//   alert("No");
// }

// const num = [1, 2];
// num.push(3)
// num.push(8)
// num.pop()
// console.log(num)

// const names = ['Lyosha', 'Grisha', 'Petya'];
// console.log(names)
// names.unshift('Alyosha')
// names.unshift('Alosha')
// console.log(names)

// const num = [1, 2, 3, 4, 5]

// const delNum = num.splice(0, 3)
// console.log(delNum)
// console.log(num)

// const addNum = num.splice(2, 0, 6, 7)
// console.log(num)

// const repNum = num.splice(1, 1, 5)
// console.log(num)

// const num = [1, 2, 3, 4, 5]
// const num2 = [6, 7, 8, 9, 10]
// const arr = num.concat(num2)
// console.log(arr)

// const message = 'Welcome to Ukraine!'
// const arrMess = message.split('')
// console.log(arrMess)
// console.log(arrMess.indexOf('l'))
// const strMess = arrMess.join('')
// console.log(strMess)

// const sum = function (a, b, c) {
//   return a + b + c;
// }
// const res = sum(2, 4, 1)
// console.log(res)

// const count = function(from = 0, to = 5, step = 1){
//     console.log(`from: ${from}, to: ${to}, step: ${step}`)
//     for (let i = from; i <= to; i += step){
//         console.log(i);
//     }
// };
// count(0, 5)

// const bank = function(amount, balance){
//     if (amount === 0){
//         alert('Please print sum " > 0"')
//     }
//     else if(amount > balance){
//         alert('You haven`t cash')
//     }
//     else{
//         alert('Perfect operation')
//     }
// }
// bank(180, 200)

// const bank = function (amount, balance) {
//   if (amount === 0) {
//     alert('Please print sum " > 0"');
//     return;
//   }
//   if (amount > balance) {
//     alert("You haven`t cash");
//     return;
//   }
//   alert("Perfect operation");
// };
// bank(1, 200);

// const sum = function () {
//   let total = 0;
//   for (const argument of arguments) {
//     total += argument;
//   }
//   return total;
// };
// console.log(sum(1, 2, 3))

// const fn = function(){
//     const arg = Array.from(arguments)
//     console.log(arg)
// }
// fn(5, 9, 10)

// const b = 10;
// const sum = function () {
//   const a = 5;
//   return a + b;
// };

// console.log(sum());

// const value = 20;
// const sum = function (number) {
//   const value = 10;
//   const inner = 5;
//   return number + value + inner;
// };
// console.log(value)
// console.log(sum(4))

// console.log(value);
// const value = 10;

// if (true) {
//   console.log(value);
//   var value = 5;
//   console.log(value);
// }

// const sum = function(a, b, c){
//     return a + b + c
// }
// const add = (a, b, c) => a + b + c
// const add1 = (a, b, c) => {
//     return a + b + c
// }
// const add2 = () =>{
//     console.log('heloouuu')
// }

// const arr = [1, 2, 3, 4, 5];

// function sumArray(arr, callback) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += callback(arr[i]);
//   }
//   return sum;
// }
// function cb(elements) {
//   return elements;
// }

// console.log(sumArray(arr, cb))

// const myNewArrowFunction = (...arg) => {
//   console.log(arg)
// }
// myNewArrowFunction(1, 2, 3);
// myNewArrowFunction(100, 200, 300, 400, 500);
// myNewArrowFunction("Js", "Python", "Java", "PHP", "C++");

// const hello1 = (mess) => {
//   console.log(mess)
// }
// hello1('Привіт JavaScript')

// const hello2 = (name) => `Hello ${name}`
// console.log(hello2('Artem'))

// const mul = (n, m) => {
//   return {
//     sum: n + m,
//     mn: n * m,
//     riz: n - m,
//   };
// };
// console.log(mul(2, 3));

// const user = {
//     name: 'bob',
//     age: 28,
// }
// console.log(user.name)
// console.log(user['name'])

// user.name = 'alex'
// console.log(user.name)
// console.log(user)

// user.address = 'Green Street 21'
// console.log(user)
// console.log(user.class)

// const hotel = {
//     name: 'Hvilya',
//     stars: 2,
//     capacity: 80,
//     person: ['bob', 'natalia', 'alex']
// }
// delete hotel.stars
// alert(hotel)

// const key = 'person'
// const getKey = function(){
//     return 'age'
// }
// const object = {
//     [key]: 'nick',
//     [getKey()]: 19,
// }
// console.log(object)

// const login = '@java_script'
// const password = '1234'
// const object = {
//     login,
//     password,
//     name: 'Java',
// }
// console.log(object)

// const hotel = {
//   name: "hilton",
//   stars: 5,
//   get: function (lol) {
//     console.log(lol);
//   },

//   get2(lol) {
//     console.log(lol);
//   },
// };

// hotel.get("bruh");
// hotel.get2("bruh2");

// const me = {
//     name: 'Bohdan',
//     age: 13,
//     hobby: 'Front-end',
// }
// console.table(me)

// const car = {
//   brand: "MINI",
//   model: "Cooper",
//   years: 2021,
//   color: "red",
//   get: function () {
//     const infoCar = `
//         brand: ${this.brand};
//         model: ${this.model};
//         years: ${this.years};
//         color: ${this.color}
//         `;
//     document.getElementById('carInfo').innerText = infoCar
//   },
// };

// car.get()

// const restauran = {
//   name: "U Halee",
//   cuis: "Ukraine",
//   address: "st. Schevchenko 30",
//   rating: 3,
//   uptInfo(inputAddress, inputRating) {
//     this.address = inputAddress;
//     this.rating = inputRating;
//     this.displayInfo();
//   },
//   displayInfo() {
//     document.getElementById("name").innerText = "Name: " + this.name;
//     document.getElementById("cuis").innerText = "Cuis: " + this.cuis;
//     document.getElementById("address").innerText = "Address: " + this.address;
//     document.getElementById("rating").innerText = "Rating: " + this.rating;
//   },
// };
// restauran.displayInfo();

// const uptRest = function () {
//   const newAddress = document.getElementById("newAddress").value;
//   const newRating = parseFloat(document.getElementById("newRating").value);
//   if (newAddress && !isNaN(newRating)) {
//     restauran.uptInfo(newAddress, newRating);
//   } else {
//     alert("It`s not correct");
//   }
// };
