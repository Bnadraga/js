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

// const user = {
//     name: 'Bohdan',
//     age: 13,
//     class: 9,
// }
// for (const key in user){
//     console.log(key)
// }
// for (const key in user){
//     console.log(user[key])
// }

// const allKeys = Object.keys(user)
// console.log(allKeys)
// const allValues = Object.values(user)
// console.log(allValues)
// const allEntries = Object.entries(user)
// console.log(allEntries)

// const hotel = {
//   name: "U Haly",
//   stars: 3,
//   capacity: 200,
// };
// const keys = Object.keys(hotel);

// for (const key of keys){
//     console.log('value: ', hotel[key])
// }

// const entries = Object.entries(hotel)
// for (const entry of entries){
//     const key = entry[0]
//     const value = entry[1]
//     console.log(`${key}: ${value}`)
// }

// const market = {
//   apple: 4,
//   orange: 2,
//   kiwi: 0.5,
//   grapes: 1,
// };
// const values = Object.values(market);
// let total = 0;
// for (const value of values) {
//   total += value;
// }
// console.log(total);

// const tem = [37, 34, 39]
// const min = Math.min(tem)
// console.log(min)
// const minTem = Math.min(...tem)
// console.log(minTem)

// const names = ["Артур", "Дмитро", "Роман", "Софія", "Давід", "Юля"];
// const spreadNames = [...names];
// console.log(names);
// console.log(spreadNames);
// console.log(names === spreadNames);
// const sliceNames = names.slice()
// console.log(names)
// console.log(sliceNames)
// const newName = [...names, 'Nika']
// console.log(newName)

// const nums = [1, 2, 3]
// const letters = ['a', 'b', 'c']
// const spreadNums = [...nums, ...letters];
// console.log(spreadNums)

// const names = ["Sara", "Nick", "Din", "Alex"];
// const newNames = [...names, "Bob"];
// console.log(newNames)

// const names = ["Sara", "Nick", "Din", "Alex"];
// const nums = [2, 3, 5, 10];
// const newArr = [...names, ...nums];
// console.log(newArr)

// const nums = [1, 2, 3]
// const newNum = [...nums]
// const newArr = [...nums, 3]

// const names = ["Sara", "Nick", "Din", "Alex"];
// const newNames = [
//     ...names.slice(0, 2),
//     "Bob",
//     ...names.slice(3)];
// console.log(newNames);

// const a = {
//   x: 5,
//   y: 10,
// };
// const b = {
//   x: 20,
//   c: 25,
// };
// const d = Object.assign({}, a, b);
// console.log(d);

// const d = {r: 25, ...a, ...b}
// console.log(d);

// let a = 10;
// let b = 15;
// a = 20;
// console.log(a);
// console.log(b);

// const c = ['bob']
// const d = c
// console.log(d)

// c.push('nick')
// console.log(c)
// console.log(d)

// const hotel = {
//   name: "Hilton",
//   stars: 5,
//   capacity: 250,
// };
// const { name, stars, capacity } = hotel;
// console.log(name, stars, status)
// console.log(hotel)

// const {name = 'hotel', stars = 4, status = 'premium'} = hotel
// console.log(name, stars, status)

// const {name: hotelName, stars, status: hotelStatus} = hotel
// console.log(hotelName, stars, hotelStatus)

// const {name, ...rest} = hotel;
// console.log(name);
// console.log(rest);

// let option = {
//   size: {
//     width: 200,
//     height: 300,
//   },
//   items: ["cake", "donut"],
//   extra: true,
// };
// const {
//     size: {width, height},
//     items: [item1, item2],
//     title = 'menu'
// } = option
// console.log(title)
// console.log(width)
// console.log(item1)
// console.log(item2)

// const rgb = [200, 35, 255];
// const [red, green, blue] = rgb;
// console.log(blue);

// let red, green, blue
// [red, green, blue] = rgb
// console.log(blue);

// const [red, green, blue, alfa = 0.1] = rgb

// const [red, ...colors] = rgb
// console.log(colors)
// const [, , blue] = rgb
// console.log(blue)

// const user = {
//     name: 'Jonh',
//     age: 30,
//     email: 'random@email'
// }
// const {name, age, email} = user

// const books = {
//   count: 3,
//   list: [
//     {
//       title: "The Great Gatsby",
//       author: "F. Scott Fitzgerald",
//       year: 1925,
//     },
//     {
//       title: "To Kill a Mockingbird",
//       author: "Harper Lee",
//       year: 1960,
//     },
//     {
//       title: "1984",
//       author: "George Orwell",
//       year: 1949,
//     },
//   ],
// };
// const {count, list} = books
// const [book1, book2, book3] = list
// const {title: title1, author: author1, year: year1} = book1
// const {title: title2, author: author2, year: year2} = book2
// const {title: title3, author: author3, year: year3} = book3

// console.log(count)
// console.log(title1, '; ', author1, '; ', year1)
// console.log(title2, '; ', author2, '; ', year2)
// console.log(title3, '; ', author3, '; ', year3)

// const person = {
//   name: "Nelli",
//   surname: "Laroy",
//   age: 25,
// };
// const personInfo = ({name, surname, age}) => {
//   return `Your name ${name}, your surname ${surname}, your age ${age}`
// }
// console.log(personInfo(person))

// const student = {
//   name: 'Bruce',
//   surname: 'Lee',
//   grades: [4, 5, 3]
// };
// const calculateAverageGrade = (grades) => {
//   const [first, second, third] = grades
//   return ((first + second + third) / grades.length)
// }
// console.log(calculateAverageGrade(student));

// const items = [
//   { name: "Футболка", price: 250, quantity: 2 },
//   { name: "Джинси", price: 800, quantity: 1 },
//   { name: "Кросівки", price: 1200, quantity: 1 },
// ];

// const calculateTotalCost = (item) => {
//   let totalCost = 0;
//   for (const { price, quantity } of items) {
//     totalCost += price * quantity;
//   }
//   return totalCost;
// };

// console.log(calculateTotalCost(items));

// ІМПЕРАТИВНИЙ
// const nums = [1, 2, 3, 4, 5, 6];
// const filterNums = [];

// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > 3){
//         filterNums.push(nums[i])
//     }
// }
// console.log(filterNums)

// ДЕКЛАРАТИВНИЙ
// const nums = [1, 2, 3, 4, 5, 6];
// const filterNums = nums.filter((value) => {return value > 3});
// console.log(filterNums);

// const a = (array, value) => {
//     for (let i = 0; i < array.length; i++){
//         array[i] *= value
//     }
// }
// const num = [1, 2, 3, 4, 5, 6]
// a(num, 2)
// console.log(num)

// ЧИСТІ ФУНКЦІЇ
// const pure = (array, value) => {
//   const result = [];
//   for (let i = 0; i < array.length; i++) {
//     result.push(array[i] * value)
//   }
//   return result
// };
// const nums = [1, 2, 3, 4, 5, 6]
// const doubledNums = pure(nums, 2)
// console.log(nums)
// console.log(doubledNums)

// Методи

// const nums = [1, 2, 3, 4, 5, 6]

// // forEach

// nums.forEach(num => console.log(num))
// nums.forEach((num, idx) => console.log(`index: ${idx}, value: ${num}`))

// // map

// const doubled = nums.map(num => num * 2)
// console.log(doubled)

// const users = [
//   { name: "Bob", age: 17 },
//   { name: "Nik", age: 27 },
//   { name: "Alex", age: 47 },
// ];
// const names = users.map(user => user.name)
// console.log(names)

// // filter

// const nums = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(nums.filter(num => num < 5))
// console.log(nums.filter(num => num === 5))
// console.log(nums.filter(num => num > 5))

// const users = [
//     {name: 'Alex', isActive: true},
//     {name: 'Bob', isActive: false},
//     {name: 'Nik', isActive: true},
//     {name: 'Anna', isActive: true},
//     {name: 'Dilan', isActive: false},
// ]
// const userActive = users.filter(user => user.isActive)
// console.log(userActive)
// const userNotActive = users.filter(user => !user.isActive)
// console.log(userNotActive)

// // find

// const nums = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(nums.find(num => num < 6))

// const users = [
//     {name: 'Alex', isActive: true, id: 1},
//     {name: 'Bob', isActive: false, id: 2},
//     {name: 'Nik', isActive: true, id: 3},
//     {name: 'Anna', isActive: true, id: 4},
//     {name: 'Dilan', isActive: false, id: 5},
// ]
// console.log(users.find(user => user.id === 3))

// // every

// const nums = val => val >= 15
// console.log([20, 135, 96, 10, 88, 74, 64].every(nums))

// const fruits = [
//     {name: 'orange', amount: 40},
//     {name: 'kiwi', amount: 100},
//     {name: 'apple', amount: 48},
//     {name: 'banana', amount: 0},
// ]
// console.log(fruits.every(fruit => fruit.amount > 0))
// console.log(fruits.some(fruit => fruit.amount > 0))

// колбек

// const callback = () => console.log("hello");
// function fun(callback) {
//   callback();
// }
// fun(callback)

// const nums = [11, 24, 31, 14, 51, 36, 27, 8, 9];
// const cost = nums.map(function (num) {
//   return num * 1.6;
// });
// console.log(cost);

// const allElements = function (arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     if (!callback(arr[i])) {
//       return false;
//     }
//   }
//   return true;
// };

// const allEven = allElements([2, 4, 6, 8, 10], function (element) {
//   return element % 2 === 0;
// });
// console.log(allEven)

// const filterArray = function (arr, callback) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i])) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// };
// const nums = filterArray([3, 17, 12, 15, 25, 88, 98, 23], function (element) {
//   return element % 2 === 1;
// });
// console.log(nums)

// const nums = [17, 52, 65, 41, 12, 9];
// const sum = nums.reduce((acc, value) => acc + value, 0);
// console.log(sum);

// const tweets = [
//   { id: "012", likes: 23, tag: ["css", "sass"] },
//   { id: "017", likes: 2, tag: ["js", "javascript"] },
//   { id: "018", likes: 87, tag: ["css", "html"] },
//   { id: "019", likes: 47, tag: ["react", "js"] },
//   { id: "024", likes: 98, tag: ["nodejs", "js"] },
// ];
// const likes = tweets.reduce((totalLikes, twet) => totalLikes + twet.likes, 0);
// console.log(likes);

// const likes = (tweets) =>
//   tweets.reduce((totalLikes, twet) => totalLikes + twet.likes, 0);
// console.log(likes(tweets));

// const tags = tweets.reduce((allTag, tweet) => {
//   allTag.push(...tweet.tag);
//   return allTag;
// }, []);
// console.log(tags);

// const tagsSum = (tweets) =>
//   tweets.reduce((allTag, tweet) => {
//     allTag.push(...tweet.tag);
//     return allTag;
//   }, []);
// const tags = tagsSum(tweets);
// const tagsCount = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }
//   acc[tag]++;
//   return acc;
// };
// const totalTags = (tags) => tags.reduce(tagsCount, {});
// const tagCount = totalTags(tags);
// console.log(tagCount);

// const nums = [5, 6, 1, 3, 4, 2, '8', '7']
// console.log(nums.sort())

// const names = ['Alex', 'Nick', 'Bob', 'Jonh']
// console.log(names.sort())

// const lets = [5, 6, 1, 3, 4, 2];
// console.log(lets.sort());
// const newLets = lets.sort((curEl, nextEl) => {
//   return curEl - nextEl;
// });
// console.log(newLets);

// const fruit = ['kiwi', 'apple', 'orange', 'banana']
// console.log(
//     fruit.sort(function(a, b){
//         return a.localeCompare(b)
//     })
// // )
// const newFruit = [...fruit]
// console.log(newFruit)

// const nums = [5, 6, 1, 3, 4, 2];
// const filter = nums.filter(x => x % 2 === 0)
// const map = filter.map(x => x * 3)
// console.log(map)
// const reverse = reverse.reverse()
// console.log(reverse)
// const result = nums
//   .filter((x) => x % 2 === 0)
//   .map((a) => a * 3)
//   .reverse();
// console.log(result)

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];
// const sortedPlayers = players.sort((a, b) => b.timePlayed - a.timePlayed);
// console.log(sortedPlayers);

// const arr = [
//   { name: "John", age: 32 },
//   { name: "Jane", age: 26 },
//   { name: "Mike", age: 42 },
//   { name: "Emily", age: 29 },
// ];
// const sortedName = arr.sort((a, b) => {
//   if (a.name < b.name) {
//     return -1;
//   }
//   if (a.name > b.name) {
//     return 1;
//   } else {
//     return 0;
//   }
// });
// console.log(sortedName);

// const products = [
//   { name: "Product 1", price: 100, quantity: 5 },
//   { name: "Product 2", price: 50, quantity: 10 },
//   { name: "Product 3", price: 200, quantity: 2 },
//   { name: "Product 4", price: 50, quantity: 5 },
// ];
// const sortedProduct = products.sort((a, b) => {
//   if (a.price !== b.price) {
//     return b.price - a.price;
//   }
//   return b.quantity - a.quantity;
// });
// console.log(sortedProduct);

// const baseSalary = 20000;
// const overTime = 15;
// const rate = 20;
// const getWage = (baseSalary, overTime, rate) => {
//   return baseSalary + overTime * rate;
// };
// getWage(baseSalary, overTime, rate);

// const employee = {
//   baseSalary: 20000,
//   overTime: 15,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overTime * this.rate;
//   },
// };
// employee.getWage()

// const animal = {
//     legs: 4,
// }
// const cat = Object.create(animal)
// cat.name = 'Murchik'
// console.log(cat)

// const animal = {
//   eats: true,
// };
// const dog = Object.create(animal);
// dog.barks = true;

// for (const key in dog) {
//   if (!dog.hasOwnProperty(key)) continue;
//   console.log(key);
// }

// const animal = {
//     eats: true,
// };
// const dog = Object.create(animal)
// dog.barks = true
// const keysDog = Object.keys(dog)
// console.log(keysDog)

// class User {
//     #email
//   constructor({ name, age, email }) {
//     this.name = name;
//     this.age = age;
//     this.#email = email;
//   }
//   getEmail() {
//     return this.#email;
//   }
//   changeEmail(newEmail) {
//     return (this.#email = newEmail);
//   }
// }
// const a = new User('Bohdan', 13);
// console.log(a);
// const b = new User('Nik', 19)
// console.log(b);

// const a = new User({
//     name: 'Bohdan',
//     age: 13,
//     email: 'bnadraga2@gmail.com'
// })
// a.changeEmail('newbnadraga2@gmail.com')
// console.log(a.#email)

// class User {
//   static Roles = {
//     ADMIN: "admin",
//     USER: "user",
//   };
//   #mail;
//   #role
//   constructor({ name, age, mail, role }) {
//     this.name = name;
//     this.age = age;
//     this.#mail = mail;
//     this.#role = role
//   }
//   get role() {
//     return this.#role;
//   }
//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const c = new User({
//   mail: "bnadraga2@gmail.com",
//   role: User.Roles.ADMIN,
// });
// console.log(c.Roles);
// console.log(User.Roles);
// console.log(c.role);
// c.role = User.Roles.USER;
// console.log(c.role);

// class User {
//   static #takenEmails = []
//   static isEmails(email){
//     return User.#takenEmails.includes(email)
//   }
//   #email
//   constructor({email}){
//     this.#email = email
//     User.#takenEmails.push(email)
//   }
// }
// const newMail = new User({email: 'bnadraga2@gmail.com'})
// console.log(User.isEmails('bnadraga2@gmail.com'))

// class Child extends Parents{

// }

// class User {
//   #email;
//   constructor(email) {
//     this.#email = email;
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }
// class Admin extends User {
//   constructor({ email, post }) {
//     super(email);
//     this.post = post;
//   }
// }
// const admin = new Admin({ email: "dog@gav.gav", post: [] });
// console.log(admin);
// console.log(admin.email);

// Element.querySelector(selector);
// const item = document.querySelector(".list-item");
// const listItems = document.querySelectorAll(".list-item");
// console.log(item);

// const listWidth = document.querySelector("#menu");
// listWidth.style.textTransform = "uppercase";
// listWidth.style.fontSize = '26px'
// listWidth.style.color = 'tomato'
// console.log(listWidth)

// document.parentNode
// document.childNodes
// document.children
// document.firstChild
// document.lastChild
// document.firstElementChild
// document.lastElementChild
// document.previousSibling
// document.nextSibling

// const btn = document.querySelector('.btn')
// btn.style.backgroundColor = 'tomato'
// btn.style.color = 'white'
// console.log(btn.style)

// const title = document.createElement("h1");
// console.log(title);
// title.textContent = "Test title";
// console.log(title);
// const img = document.createElement("img");
// console.log(img);
// img.src = "/js/hw-17/image.png";
// img.alt = "aa";

// const list = document.querySelector(".list");

// const lastItem = document.createElement("li");
// lastItem.textContent = "bob";
// list.append(lastItem);

// const firstItem = document.createElement("li");
// firstItem.textContent = "alex";
// list.prepend(firstItem);

// const text = document.querySelector('.text')
// text.remove()
// console.log(text)

// const title = document.querySelector('.article .title')
// title.innerHTML = 'New article title'

// const technologies = ["html", "css", "js", "react", "node"];
// const list = document.querySelector(".list");

// const markup = technologies
//   .map((technology) => `<li class='list_item'>${technology}</li>`)
//   .join("");
// console.log(markup);
// list.innerHTML = markup;

// list.insertAdjacentHTML("afterend", "<h3 class='top'>new title</h3>");

// const saveBtn = document.querySelector("button[data-action='save']");
// console.log(saveBtn.dataset.action)
// const closeBtn = document.querySelector("button[data-action='close']");
// console.log(closeBtn.dataset.action)

// const singleBtn = document.querySelector("#single");
// const handleClick = () => alert("hello");
// singleBtn.addEventListener("click", handleClick);

// const multiBtn = document.querySelector("#multiple");
// const firstCall = () => alert("first callback");
// const secondCall = () => alert("second callback");
// const thirdCall = () => alert("third callback");

// multiBtn.addEventListener("click", firstCall);
// multiBtn.addEventListener("click", secondCall);
// multiBtn.addEventListener("click", thirdCall);

// const addBtn = document.querySelector('button[data-action="add"]');
// const removeBtn = document.querySelector('button[data-action="remove"]');
// const btn = document.querySelector("#btn");

// const handleClick = () => {
//   alert("Click event listener alert!");
// };
// addBtn.addEventListener("click", () => {
//   btn.addEventListener("click", handleClick);
// });

// removeBtn.addEventListener("click", () => {
//   btn.removeEventListener("click", handleClick);
// });

// const btn = document.querySelector('#btn')
// const handleClick = event => {
//   console.log('event: ', event)
//   console.log('event-type:', event.type)
// }
// btn.addEventListener('click', handleClick)

// function changeColor(button) {
//   const colors = ["red", "orange", "green", "blue"];
//   const randomColors = colors[Math.floor(Math.random() * colors.length)];
//   button.style.backgroundColor = randomColors;
// }

// function addAlert(){
//   alert('hello')
// }