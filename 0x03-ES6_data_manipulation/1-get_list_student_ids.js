export default function getListStudentIds(mylist) {
  if (mylist.constructor.name === 'Array') {
    const newArray = mylist.map((element) => element.id);
    return newArray;
  }
  return [];
}
