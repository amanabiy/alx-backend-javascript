const http = require('http');
const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/students') {
    countStudents(process.argv[2], 0)
      .then((success) => {
        const out = `This is the list of our students\n${success}`;
        res.end(out);
      });
  } else {
    res.end('Hello Holberton School!');
  }
});

app.listen(port, hostname);
module.exports = app;
