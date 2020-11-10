// NOTE Import different methods here
import { maxItems, canCapture, diffMaxMin } from './arrays.js';
import { isRepdigit, isAvgWhole } from './math.js';
import { makeTitle, transformUpvotes } from './strings.js';

// NOTE create fake sample data and test the method below
// let prices = ['$34', '$62', '$62', '$98', '$100'];
// let budget = '$101';
// maxItems(prices, budget);

// let rookPositions = ['A8', 'E8'];
// // @ts-ignore
// canCapture(rookPositions);

// let number = -11;
// isRepdigit(number);

// let str = 'I am a title';
// makeTitle(str);

// let arr = [-70, 43, 34, 54, 22];
// diffMaxMin(arr);

// let str = '20.3k 3.8k 7.7k 992';
// transformUpvotes(str);

let arr = [4, 1, 7, 9, 2, 5, 7, 2, 4];
isAvgWhole(arr);
