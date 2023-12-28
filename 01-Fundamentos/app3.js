const fs = require('fs');
// Read file
const content = fs.readFileSync('reactREADME.md', 'utf8');

const words = content.split(' ');

const reactCount = words.filter((w) => w.toLowerCase().includes('react')).length;

console.log('Palabras: ', reactCount);