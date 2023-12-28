const fs = require('fs');

// Read file
const data = fs.readFileSync('reactREADME.md', 'utf8');
// Replace  a word with another
const newData = data.replace(/React/ig, 'Angular');
// Creating a new file that replace the React word with Angular
fs.writeFileSync('README-Angular.md', newData)

console.log(newData)