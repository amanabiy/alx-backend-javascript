const app = require('express')();
const countStudents = require('./3-read_file_async');

const port = 1245;
app.listen(port);

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2], 0)
    .then((success) => {
      const out = `This is the list of our students\n${success}`;
      res.send(out);
    });
});

module.exports = app;
