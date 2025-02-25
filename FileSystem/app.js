const fs = require('fs');

// const content = fs.readFileSync('./text.txt', 'utf-8');
const content = fs.readFileSync('./text.txt');

console.log(content.toString('utf-8'));