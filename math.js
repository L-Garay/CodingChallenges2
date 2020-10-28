// A repdigit is a positive number composed out of the same digit. Create a function that takes an integer and returns whether it's a repdigit or not. The number 0 should return true (even though it's not a positive number).
export function isRepdigit(num) {
  let numStr = num.toString();
  let numArr = numStr.split('');
  let checkNum = (currentValue) =>
    currentValue == currentValue && currentValue > 0;
  console.log(numArr.every(checkNum));
}
