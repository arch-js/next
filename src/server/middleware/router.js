import { match } from '../../shared/route-parser';

export default function* routerMiddleware(next) {
  if (typeof this.arch === 'undefined') throw new Error('Must be run inside an Arch server.');

  let routes = this.arch.application.routes;
  let context;
  let route = routes.find(({ path }) => context = match(this.originalUrl, path));

  if (route) {
    this.arch.route = route;
    this.arch.context = context;
    yield next;
  } else {
    this.status = 404;
  }
}
