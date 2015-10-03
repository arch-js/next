import koa from 'koa';
import koaRouter from 'koa-router';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

/**
 * Arch server
 */

export default function server({ routes }) {
  const app = koa();

  const router = koaRouter();

  routes.forEach(({path, component: Route}) => {
    router.get(path, function* (next) {
      this.body = ReactDOMServer.renderToString(<Route />);
    });
  });

  app
    .use(router.routes())
    .use(router.allowedMethods());

  return app;
}
