/*
  spec/unit/client/module.js
  spec for src/client/index.js
*/

import client from '../../../src/client';
import { assert } from 'chai';

describe('Client module', () => {
  it('exports a valid object', () => {
    assert.ok(client);
    assert.isObject(client);
  });

  xit('includes client and shared modules', () => {
  });
});
