/*
  spec/unit/shared/route.js
  spec for src/shared/route.js
*/

import { assert } from 'chai';
import React from 'react';
import route from '../../../src/shared/route';

class FakeComponent extends React.Component {
  render() {
    return <span>Hello, world!</span>;
  }
}

describe('route', () => {
  it('returns a valid route definition', () => {
    const routeA = route('*', FakeComponent);
    assert.deepEqual(routeA, ['*', FakeComponent])
  });

  it('fails when a string is not passed as first argument', () => {
    const routeA = () => route(15, FakeComponent);
    assert.throws(routeA, Error, '15 must be a string');
  });

  it('fails when a component is not passed as second argument', () => {
    const routeA = () => route('*', 'Bad Wolf');
    assert.throws(routeA);
  });
});
