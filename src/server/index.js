import koa from 'koa';
import router from './middleware/router';

/**
 * Instantiate a server given an application.
 * @param {Application} [application] Application object with at least one route definition
 */

export default function server({ routes }) {
  const app = koa();

  app
    .use(router(routes))

  return app;
}
