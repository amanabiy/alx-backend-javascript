export default function getStudentsByLocation(mylist, city) {
  const myArray = mylist.filter((element) => element.location === city);
  return myArray;
}
