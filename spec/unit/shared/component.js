import component from '../../../src/shared/component';
import { assert } from 'chai';
import FakeComponent from '../../fixtures/fake-component';

/** @test {component} */
describe('component', () => {
  it('wraps a component with arch-specific data', () => {
    const WrappedFakeComponent = component(FakeComponent, {
      rootQuery: { a: 1 }
    });
    assert.isObject(WrappedFakeComponent.meta);
  });
});
