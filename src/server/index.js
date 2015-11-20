import Koa from 'koa';
import init from './middleware/init';
import router from './middleware/router';
import render from './middleware/render';

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
