/*
  spec/unit/shared/cursor.js
  spec for src/shared/cursor.js
*/

import cursor from '../../../src/shared/cursor';
import { assert } from 'chai';

describe('Cursor', () => {
  it('works', () => {
    assert.equal(cursor('it works'), 'it works');
  });
});
