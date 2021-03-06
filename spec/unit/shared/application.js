import application from '../../../src/shared/application';
import { assert } from 'chai';

/** @test {application} */
describe('application', () => {
  it('returns a valid application definition', () => {
    const routes = [];
    const start = () => true;
    const getInitialState = () => ({ message: 'Lorem Ipsum' });
    const app = application({ routes, start, getInitialState });
    assert.equal(app.routes, routes);
    assert.equal(app.start, start);
    assert.equal(app.getInitialState, getInitialState);
  });
});
