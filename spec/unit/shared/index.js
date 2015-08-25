/*
  spec/unit/shared/module.js
  spec for src/shared/index.js
*/

import shared from '../../../src/shared';
import { assert } from 'chai';

describe('Shared module', () => {
  it('exports a valid object', () => {
    assert.ok(shared);
    assert.isObject(shared);
  });

  xit('includes shared modules', () => {
  });
});
