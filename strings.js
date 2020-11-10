// Create a function that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.

export function makeTitle(str) {
  let strArr = str.split(' ');
  let capitalArr = strArr.map((w) => w[0].toUpperCase() + w.substring(1));
  return capitalArr.join(' ');
}