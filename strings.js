// Create a function that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.

export function makeTitle(str) {
  let strArr = str.split(' ');
  debugger;
  for (let i = 0; i < strArr.length; i++) {
    strArr[i][0] = strArr[i][0].toUpperCase();
  }
  let capStr = strArr.join(' ');
  console.log(capStr);
}
