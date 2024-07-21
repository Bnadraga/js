// 1

const applyCallbackToEachElement = (arr, callback) => {
  const result = [];
  for (const element of arr) {
    result.push(callback(element));
  }
  return result;
};

const arr = [1, 2, 3, 4, 5];
const squareCallback = (number) => number * number;
const result = applyCallbackToEachElement(arr, squareCallback);
console.log(result); // [1, 4, 9, 16, 25]

// 2

const calculateDiscountedPrice = (price, discount, callback) => {
  const discountedPrice = price - (price * discount) / 100;
  callback(discountedPrice);
};
const showDiscountedPrice = (discountedPrice) => {
  console.log(`Discounted price: ${discountedPrice}`);
};
calculateDiscountedPrice(100, 10, showDiscountedPrice); // Discounted price: 90
