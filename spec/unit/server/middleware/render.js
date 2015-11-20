import FakeComponent from '../../../fixtures/fake-component';
import render from '../../../../src/server/middleware/render';
import { assert } from 'chai';
import http from 'http';
import request from 'supertest';
import Koa from 'koa';

/** @test {renderMiddleware} */
describe('Render Middleware', () => {
  it('Creates a middleware which renders the application with a certain state and template.', (done) => {
    const app = new Koa();

    app
      .use(async (ctx, next) => {
        ctx.arch = {
          application: { domRoot: 'myapp' },
          options: { template: '<html><body>{{root}}</body></html>' },
          state: { test: true },
          route: { path: 'blah', component: FakeComponent },
          context: {}
        }

        await next();
      })
      .use(render);

    request(http.createServer(app.callback()))
      .get('/')
      .end((err, res) => {
        if (err) throw err;
        assert.match(res.text, /<html><body><script type=\"application\/json\" id=\"myapp-state\">(?:.+)<\/script>\n<div(?:.*)id="myapp"(?:.*)>(?:.*)<\/div><\/body><\/html>/)
        done();
      });
  });
});
