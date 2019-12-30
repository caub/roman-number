#!/usr/bin/env node

const RomanNumber = require('..');

const input = process.argv[2] || process.argv[1];
const rn = new RomanNumber(input);

console.log(`${rn.value}` === input ? rn.toString() : rn.value);
