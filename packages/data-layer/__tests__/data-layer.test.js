'use strict';

const dataLayer = require('..');
const assert = require('assert').strict;

assert.strictEqual(dataLayer(), 'Hello from dataLayer');
console.info('dataLayer tests passed');
