/*
  spec/unit/shared/module.js
  spec for src/shared/index.js
*/

import shared from '../../../src/shared';
import { assert } from 'chai';

export function assertSharedModule(m) {
  assert.isObject(m);
  assert.ok(m.route);
  assert.ok(m.application);
};

describe('Shared modules', () => {
  it('exports shared modules', () => assertSharedModule(shared));
});
