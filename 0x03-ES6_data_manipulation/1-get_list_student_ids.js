export default function getListStudentIds(mylist) {
  if (mylist.constructor.name !== 'Array') {
    return [];
  }
  const newArray = mylist.map((element) => element.id);
  return newArray;
}
