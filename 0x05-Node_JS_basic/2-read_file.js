const fs = require('fs');

function countStudents(path) {
  try {
    let data = fs.readFileSync(path, 'utf8').toString().split('\n');
    data = data.slice(1, data.length - 1);
    console.log(`Number of students: ${data.length}`);
    const studSub = {};
    for (const row of data) {
      const student = row.split(',');
      if (!studSub[student[3]]) studSub[student[3]] = [];
      studSub[student[3]].push(student[0]);
    }
    for (const subject in studSub) {
      if (subject) console.log(`Number of students in ${subject}: ${studSub[subject].length}. List: ${studSub[subject].join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
