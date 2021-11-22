export default function appendToEachArrayValue(array, appendString) {
  const newArray = []
  for (let word of array) {
    word = appendString + word;
    newArray.push(word)
  }
  return newArray;
}
