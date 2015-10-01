/*
  spec/unit/server/index.js
  spec for src/server/index.js
*/

import server from '../../../src/server';
import { assert } from 'chai';
import { assertSharedModule } from '../shared';

export function assertServerModule(m) {
  assert.isObject(m);
  assertSharedModule(m);
};

describe('Server module', () => {
  it('exports server and shared modules', () => assertServerModule(server));
});
