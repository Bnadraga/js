// 1

let fCalc = 1;
while (fCalc < 11) {
  console.log("First exercise: ", fCalc);
  fCalc += 1;
}

// 2

const sMax = 21;

for (let i = 0; i < sMax; i++) {
  if (i % 2 !== 0 || i === 0) {
    continue;
  }
  console.log("Even numbers: ", i);
}

// 3

const tMax = 10;
const tNum = 7;

for (let i = 1; i <= tMax; i++) {
  const tCalc = tNum * i;
  console.log(`${tNum} · ${i} = ${tCalc}`);
}

// 6

let fMass = prompt("Number n: ");

for (let i = 0; i < fMass; i++) {
  console.log(i);
}

// 7

const fMax = 21;
let fNum = 1;

while (fNum <= fMax) {
  if (fNum % 3 === 0 || fNum % 3 === 1) {
    fNum++;
    continue;
  }
  console.log('Fifth exercise: ', fNum);
  fNum++;
}
