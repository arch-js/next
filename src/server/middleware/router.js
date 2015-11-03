import { parse } from '../../shared/route-parser';

export default function* routerMiddleware(next) {
  if (typeof this.arch === 'undefined') throw new Error('Router middleware must be run inside an Arch server.');

  let matched = parse(this.arch.application.routes, this.originalUrl);

  if (matched) {
    let { route, context } = matched;
    this.arch.route = route;
    this.arch.context = context;
    yield next;
  } else {
    this.status = 404;
  }
}
