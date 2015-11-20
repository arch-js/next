import Koa from 'koa';
import init from './middleware/init';
import router from './middleware/router';
import render from './middleware/render';

/**
 * Instantiate a server given an application.
 * @param {Application} [application] Application object with at least one route definition
 */

export default function server(application, options) {
  const app = new Koa();
  return {
    use: (mw) => app.use(mw),
    start: () => {
      return app
        .use(init(application, options))
        .use(router)
        .use(render)
        .listen(options.port)
    }
  }
}
