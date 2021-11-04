const fs = require('fs');
const input = require('./input.json');
const keys = require('./output-keys.json');
const flatten = require('flat');
const unflatten = flatten.unflatten;

const original = flatten(input);
const unmappedKeys = {};
Object.entries(keys).forEach(([k, v]) => {
    unmappedKeys[k.replace(/^[^\.]+\./, '')] = v;
});
console.log(unmappedKeys);
const merged = { ...original, ...unmappedKeys };
const output = unflatten(merged);

fs.writeFileSync('output-translated.json', JSON.stringify(output, null, 2));
