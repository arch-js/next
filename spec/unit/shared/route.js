/*
  spec/unit/shared/route.js
  spec for src/shared/route.js
*/

import { assert } from 'chai';
import FakeComponent from '../../fixtures/fake-component';
import React from 'react';
import route from '../../../src/shared/route';

describe('route', () => {
  it('returns a valid route definition', () => {
    const routeA = route('*', FakeComponent);
    assert.deepEqual(routeA, ['*', FakeComponent]);
  });

  it('fails when a string is not passed as first argument', () => {
    const routeFn = () => route(15, FakeComponent);
    assert.throws(routeFn, Error, '15 must be a string');
  });

  it('fails when a component is not passed as second argument', () => {
    const routeFn = () => route('*', 'Bad Wolf');
    assert.throws(routeFn);
    const routeFn2 = () => route('*', React.DOM.div);
    assert.throws(routeFn2);
  });
});
