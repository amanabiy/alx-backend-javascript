export default function createEmployeesObject(departmentName, employees) {
  return {
    Software: `${departmentName}`,
    employees,
  };
}
