/*
  spec/unit/client/index.js
  spec for src/client/index.js
*/

import client from '../../../src/client';
import { assert } from 'chai';
import { assertSharedModule } from '../shared/index';

export function assertClientModule(m) {
  assert.isObject(m);
  assertSharedModule(m);
}

describe('Client modules', () => {
  it('exports client and shared modules', () => assertClientModule(client));
});
