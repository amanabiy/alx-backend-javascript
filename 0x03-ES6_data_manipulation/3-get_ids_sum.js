export default function getStudentIdsSum(mylist) {
  const updatedArray = mylist.reduce((previous, current) => (previous + current.id), 0);
  return updatedArray;
}
