import router from '../../../../src/server/middleware/router';
import { assert } from 'chai';
import http from 'http';
import request from 'supertest';
import Koa from 'koa';

/** @test {routerMiddleware} */
describe('Router Middleware', () => {
  it('Sets arch route to the correct value.', (done) => {
    const app = new Koa();
    const route = { path: '/route' };
    let actualRoute;

    app
      .use(async (ctx, next) => {
        ctx.arch = {
          application: {
            routes: [
              route
            ]
          }
        }

        await next();
      })
      .use(router)
      .use(async (ctx) => {
        actualRoute = ctx.arch.route;
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

    const app = new Koa();
    const expectedContext = {
      hash: null,
      originalUrl: '/route/bob?hello=world',
      params: { name: 'bob' },
      path: '/route/bob',
      query: { hello: 'world' },
      route: '/route/:name'
    };

    app
      .use(async (ctx, next) => {
        ctx.arch = {
          application: {
            routes: [{ path: '/route/:name' }]
          }
        }

        await next();
      })
      .use(router)
      .use(async (ctx) => {
        actualContext = ctx.arch.context;
      });

    request(http.createServer(app.callback()))
      .get('/route/bob?hello=world')
      .end(() => {
        assert.deepEqual(actualContext, expectedContext);
        done();
      });
  });
});
