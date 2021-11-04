const fs = require('fs');
const keys = require('./output-keys.json');

Object.entries(keys).forEach(([k, v]) => {
    keys[k] = `🕺${v.replace(/ /g, '🍡')}💃`;
});

fs.writeFileSync('output-keys.json', JSON.stringify(keys, null, 2));
