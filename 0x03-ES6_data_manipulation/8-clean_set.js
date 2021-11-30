export default function cleanSet(set, startString) {
  const { length } = startString;
  let myString = '';
  let count = 0;
  if (!startString || !startString.length) return myString;
  for (const element of set) {
    if (element.startsWith(startString)) {
      if (count === 0) myString = `${element.substring(length)}`;
      else myString = `${myString}-${element.substring(length)}`;
    }
    count += 1;
  }
  return myString;
}
