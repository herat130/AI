'use strict';

const pwaApp = require('..');
const assert = require('assert').strict;

assert.strictEqual(pwaApp(), 'Hello from pwaApp');
console.info('pwaApp tests passed');
