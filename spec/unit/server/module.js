/*
  spec/unit/server/module.js
  spec for src/server/index.js
*/

import server from '../../../src/server';
import { assert } from 'chai';

describe('Server module', () => {
  it('exports a valid object', () => {
    assert.ok(server);
    assert.isObject(server);
  });

  xit('includes server and shared modules', () => {
  });
});
