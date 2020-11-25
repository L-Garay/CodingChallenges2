// Given an array of prices of things in the store and the amount of money you have, return the maximum number of items you could possibly buy. (can only buy one of each)
export function maxItems(prices, budget) {
  let itemCount = 0;
  debugger;
  let budgetArr = budget.split('');
  let dollarSign = budgetArr.shift();
  let numBudget = budgetArr.join('');
  let num = parseInt(numBudget);
  let priceStr = prices.join('');
  let strArr = priceStr.split('$');
  let emptyString = strArr.shift();
  let numArr = [];
  strArr.forEach((n) => {
    let num = parseInt(n);
    numArr.push(num);
    numArr.sort((a, b) => a - b);
  });
  numArr.forEach((n) => {
    if (n <= num) {
      itemCount++;
      num -= n;
    }
  });
  if (itemCount == 0) {
    console.log('Not enough funds!');
  } else {
    console.log(itemCount);
  }
}

// Write a function that returns true if two rooks can attack each other, and false otherwise. Two rooks can attack each other if they share the same row (letter) or column (number).
export function canCapture([yourRook, opponentsRook]) {
  let yourRookArr = yourRook.split('');
  let oppRookArr = opponentsRook.split('');
  if (yourRookArr[0] == oppRookArr[0] || yourRookArr[1] == oppRookArr[1]) {
    console.log('true');
    return true;
  }
  console.log('false');
  return false;
}

// Create a function that takes an array and returns the difference between the biggest and smallest numbers.
export function diffMaxMin(arr) {
  return Math.max(...arr) - Math.min(...arr);
}

// Find all prime numbers in an array
export function primeNumbers(arr) {
  let primeArr = arr.filter((number) => {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        return false;
      }
      return true;
    }
  });
  console.log(primeArr);
}

// Remove all duplicates from an array
export function removeDuplicates(arr) {
  let uniqueArr = [];
  arr.forEach((el) => {
    if (uniqueArr.includes(el) == false) {
      uniqueArr.push(el);
    }
  });
  console.log(uniqueArr);
  return uniqueArr;
}

// Include only unique elements in array
export function uniqueOnly(arr) {
  let UniqueArr = removeDuplicates(arr);
  let repeat = 0;
  let reallyUnique = [];
  UniqueArr.forEach((elem) => {
    for (let i = 0; i < arr.length; i++) {
      if (elem == arr[i]) {
        repeat++;
      }
    }
    if (repeat < 2) {
      reallyUnique.push(elem);
    }
    repeat = 0;
  });
  console.log(reallyUnique);
}
