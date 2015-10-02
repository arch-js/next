/*
  spec/unit/shared/component.js
  spec for src/shared/component.js
*/

import component from '../../../src/shared/component';
import { assert } from 'chai';
import FakeComponent from '../../fixtures/fake-component';
import React from 'react';

describe('component', () => {
  it('wraps a component with arch-specific data', () => {
    const WrappedFakeComponent = component(FakeComponent, {
      rootQuery: { a: 1 }
    });
    console.log(WrappedFakeComponent);
    assert.isObject(WrappedFakeComponent.meta);
  });
});
