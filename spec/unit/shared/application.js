import application from '../../../src/shared/application';
import { assert } from 'chai';
import React from 'react';

/** @test {application} */
describe('application', () => {
  it('returns a valid application definition', () => {
    const routes = [];
    const start = () => true;
    const app = application(routes, start);
    assert.equal(app.routes, routes);
    assert.equal(app.start, start);
  });
});
