import koa from 'koa';

import init from './middleware/init';
import render from './middleware/render';
import router from './middleware/router';

/**
 * Instantiate a server given an application.
 * @param {Application} [application] Application object with at least one route definition
 */

export default function server(application, options) {
  const app = koa();

  app
    .use(init(application, options))
    .use(router)
    .use(render)

  return app;
}
