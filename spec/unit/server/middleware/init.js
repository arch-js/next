import init from '../../../../src/server/middleware/init';
import { assert } from 'chai';
import http from 'http';
import request from 'supertest';
import Koa from 'koa';

describe('Init Middleware', () => {
  it('Sets state, application and options on the running context', (done) => {
    const app = new Koa();
    const state = { test: true };

    const application = {
      getInitialState: () => state
    };

    const options = { domRoot: 'myapp' };

    app
      .use(init(application, options))
      .use(async (ctx, next) => {
        assert.deepEqual(ctx.arch, {
          application,
          state,
          options
        });

        await next();
      });

    request(http.createServer(app.callback()))
      .get('/')
      .end(done);
  });

  it('Supports promises in getInitialState', (done) => {
    const app = new Koa();
    const state = { test: true };

    const application = {
      getInitialState: () => Promise.resolve(state)
    };

    const options = { domRoot: 'myapp' };

    app
      .use(init(application, options))
      .use(async (ctx, next) => {
        assert.deepEqual(ctx.arch.state, state);
        await next();
      });

    request(http.createServer(app.callback()))
      .get('/')
      .end(done);
  });
});
