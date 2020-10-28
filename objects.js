export function keysAndValues(obj) {
  let keyArr = Object.keys(obj);
  let valueArr = Object.values(obj);
  return [keyArr.sort((a, b) => a - b), valueArr];
}
