import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { match } from '../../shared/route-parser';

export default function routerMiddleware(routes) {
  return function* (next) {
    let context;
    let route = routes.find(({ path }) => context = match(this.originalUrl, path))

    if (route) {
      let Component = route.component;
      this.body = ReactDOMServer.renderToString(
        <Component context={context} />
      );
    } else {
      yield next;
    }
  }
}
