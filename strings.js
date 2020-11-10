// Create a function that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.

export function makeTitle(str) {
  let strArr = str.split(' ');
  let capitalArr = strArr.map((w) => w[0].toUpperCase() + w.substring(1));
  return capitalArr.join(' ');
}

// Create a function that transforms a string of upvote counts into an array of numbers. Each k represents a thousand.
export function transformUpvotes(str) {
  // Couldn't figure it out, here are acceptable answers
  return str
    .split(' ')
    .map((a) => (a.endsWith('k') ? parseFloat(a) * 1000 : parseInt(a)));
  return str.split(' ').map((x) => +x.replace('.', '').replace('k', '00'));
}
