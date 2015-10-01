/*
  spec/unit/shared/application.js
  spec for src/shared/application.js
*/

import application from '../../../src/shared/application';
import { assert } from 'chai';
import React from 'react';

describe('applications', () => {
  it('returns a valid application definition', () => {
    const routes = [];
    const start = () => true;
    const app = application(routes, start);
    assert.equal(app.routes, routes);
    assert.equal(app.start, start);
  });
});
