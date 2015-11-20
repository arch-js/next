import { parse } from '../../shared/route-parser';

export default async (ctx, next) => {
  if (typeof ctx.arch === 'undefined') throw new Error('Router middleware must be run inside an Arch server.');

  let matched = parse(ctx.arch.application.routes, ctx.originalUrl);

  if (matched) {
    let { route, context } = matched;
    ctx.arch.route = route;
    ctx.arch.context = context;
    await next();
  } else {
    ctx.status = 404;
  }
}
