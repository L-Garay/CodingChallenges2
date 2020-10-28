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