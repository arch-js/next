import init from '../../../../src/server/middleware/init';
import { assert } from 'chai';
import http from 'http';
import request from 'supertest';
import koa from 'koa';

/** @test {initMiddleware} */
describe('Init Middleware', () => {
  it('Sets state, application and options on the running context', (done) => {
    const app = koa();
    const state = { test: true };

    const application = {
      getInitialState: () => state
    };

    const options = { domRoot: 'myapp' };

    app
      .use(init(application, options))
      .use(function* (next){
        assert.deepEqual(this.arch, {
          application,
          state,
          options
        });

        yield next;
      });

    request(http.createServer(app.callback()))
      .get('/')
      .end(done);
  });

  it('Supports promises in getInitialState', (done) => {
    const app = koa();
    const state = { test: true };

    const application = {
      getInitialState: () => Promise.resolve(state)
    };

    const options = { domRoot: 'myapp' };

    app
      .use(init(application, options))
      .use(function* (next){
        assert.deepEqual(this.arch.state, state);
        yield next;
      });

    request(http.createServer(app.callback()))
      .get('/')
      .end(done);
  });
});
