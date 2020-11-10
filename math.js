// A repdigit is a positive number composed out of the same digit. Create a function that takes an integer and returns whether it's a repdigit or not. The number 0 should return true (even though it's not a positive number).
export function isRepdigit(num) {
  let numStr = num.toString();
  let numArr = numStr.split('');
  let checkNum = (currentValue) =>
    currentValue == currentValue && currentValue > 0;
  console.log(numArr.every(checkNum));
}

// Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.
export function isAvgWhole(arr) {
  let total = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  if (Number.isInteger(total / arr.length)) {
    return true;
  }
  return false;
}
