export default function updateStudentGradeByCity(studentList, city, gradeList) {
  const myArray = studentList.filter((element) => element.location === city)
    .map((student) => {
      const newGrade = gradeList.filter((grade) => grade.studentId === student.id);
      const newStud = student;
      try {
        const { grade } = newGrade[0];
        newStud.grade = grade;
      } catch (err) {
        newStud.grade = 'N/A';
      }
      return student;
    });
  return myArray;
}
