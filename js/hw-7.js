// 1

const farr = [1, 2, 3];
farr[1] = 3;
console.log(farr);

// 2

const sarr = ['white', 'black', 'green'];
sarr[3] = 'red';
console.log(sarr);

// 3

const tarr = [13, 15, 7];
let ttotal = 0;
for (let i = 0; i < tarr.length;  i++){
    ttotal += tarr[i]
}
console.log(ttotal)

// 4

const arr4 = [13, 15, 7, 8, 24];
for (const num4 of arr4){
    console.log(num4)
}

// 5

const arr5 = ['one', 'two', 'three', 'four', 'five'];
for (let i = 0; i < arr5.length; i ++){
    if (arr5[i].length < 5){
        continue;
    }
    console.log(arr5[i])
}

// 6

const arr6 = [13, 15, 7, 8, 24, 45, 86, 17, 2, 61];
let total6;
for (let i = 0; i < arr6.length;  i++){
    total6 = Math.max(...arr6)
}
console.log(total6)

// 7

const num7 = [9, 12, 4, 15, 27, 30, 18, 14, 7, 5];

for (let i = 0; i < num7.length; i++) {
  if (num7[i] % 2 === 0) {
    console.log(num7[i]);
  }
}