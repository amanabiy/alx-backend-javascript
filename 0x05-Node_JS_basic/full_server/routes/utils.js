const fs = require('fs');

const readDatabase = (path) => {
    const readPromise = (resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) reject(new Error(''))
        })
    }
};

module.exports = readDatabase;