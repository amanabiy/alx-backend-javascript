export default function getListStudentIds(mylist) {
//   if (typeof mylist === 'string')
//     return [];
//   if (mylist.isArray) {
//     return [];
//   }
  if (mylist.constructor.name === 'Array') {
    const newArray = mylist.map((element) => element.id);
    return newArray;
    // do something
  }

  return [];
}
