const fs = require('fs');
const input = require('./input.json');
const flatten = require('flat');

const translatable = (key, value) => {
    if (typeof value !== "string")
        return false;
    if (/^_/.test(key))
        return false;
    if (/(text|html|name|title|alt|label)$/.test(key))
        return true;
    return false;
};

const keys = {};
Object.entries(flatten(input)).forEach(([k, v]) => {
    if (translatable(k, v)) keys[`${input.namespace}.${k}`] = v;
});

fs.writeFileSync('output-keys.json', JSON.stringify(keys, null, 2));
