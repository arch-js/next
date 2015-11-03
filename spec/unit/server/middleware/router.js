import router from '../../../../src/server/middleware/router';
import { assert } from 'chai';
import http from 'http';
import request from 'supertest';
import koa from 'koa';

/** @test {routerMiddleware} */
describe('Router Middleware', () => {
  it('Sets arch route to the correct value.', (done) => {
    const app = koa();
    const route = { path: '/route' };
    let actualRoute;

    app
      .use(function* (next) {
        this.arch = {
          application: {
            routes: [
              route
            ]
          }
        }

        yield next;
      })
      .use(router)
      .use(function* (){
        actualRoute = this.arch.route;
      });

    request(http.createServer(app.callback()))
      .get('/route')
      .end(() => {
        assert.equal(actualRoute, route);
        done();
      });
  });

  it('Sets arch context with all parameters.', (done) => {
    let actualContext;

    const app = koa();
    const expectedContext = {
      hash: null,
      originalUrl: '/route/bob?hello=world',
      params: { name: 'bob' },
      path: '/route/bob',
      query: { hello: 'world' },
      route: '/route/:name'
    };

    app
      .use(function* (next) {
        this.arch = {
          application: {
            routes: [{ path: '/route/:name' }]
          }
        }

        yield next;
      })
      .use(router)
      .use(function* (){
        actualContext = this.arch.context;
      });

    request(http.createServer(app.callback()))
      .get('/route/bob?hello=world')
      .end(() => {
        assert.deepEqual(actualContext, expectedContext);
        done();
      });
  });
});
