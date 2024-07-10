// 1

const user = {
  name: "mango",
  age: 20,
  hobby: "html",
  premium: true,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

const userKeys = Object.keys(user);
for (const key of userKeys) {
  console.log(`${key}: ${user[key]}`);
}

// 2

const countProps = function (obj) {
  return Object.keys(obj).length;
};

console.log(countProps({}));
console.log(countProps({ name: "Mango", age: 2 }));
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// 3

const findBestEmployee = function (employees) {
  let bestEmployee = "";
  let maxTask = 0;

  for (const [name, tasks] of Object.entries(employees)) {
    if (tasks > maxTask) {
      maxTask = tasks;
      bestEmployee = name;
    }
  }
  return bestEmployee;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence
console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango
console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux

// 4

const countTotalSalary = function (employees) {
  let totalSalary = 0;

  for (const salary of Object.values(employees)) {
      totalSalary += salary;
  }
  return totalSalary;
};


console.log(countTotalSalary({}));
console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
);
console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
);

// 5

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроїд", price: 400, quantity: 7 },
  { name: "Захоплення", price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  const values = [];
  for (const item of arr) {
    if (item.hasOwnProperty(prop)) {
      values.push(item[prop]);
    }
  }
  return values;
};

console.log(getAllPropValues(products, "name"));
console.log(getAllPropValues(products, "quantity"));
console.log(getAllPropValues(products, "category"));

// 6

const products2 = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроїд", price: 400, quantity: 7 },
  { name: "Захоплення", price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
    for (const product of allProdcuts) {
      if (product.name === productName) {
        return product.price * product.quantity
      }
    }
    return 0;
};

console.log(calculateTotalPrice(products2, "Радар"));
console.log(calculateTotalPrice(products2, "Дроїд"));
