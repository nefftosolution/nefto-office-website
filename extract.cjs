const fs = require('fs');
const content = fs.readFileSync('src/data/serviceData.js', 'utf8');

const regex = /slug:\s*"([^"]+)",\n\s*title:\s*"([^"]+)"/g;
let match;
while ((match = regex.exec(content)) !== null) {
  console.log(match[1] + ' : ' + match[2]);
}
