import React from 'react';
import ReactDOMServer from 'react-dom/server';
import encode from 'ent/encode';

export default function* renderMiddleware(next) {
  let domRoot = this.arch.application.domRoot;
  let template = this.arch.options.template;
  let Component = this.arch.route.component;

  let body = ReactDOMServer.renderToString(
    <Component context={this.arch.context} />
  );

  this.body = template.replace('{{root}}', `<script type="application/json" id="${domRoot}-state">${encode(JSON.stringify(this.arch.state))}</script><div id="${domRoot}">${body}</div>`);
  yield next;
}
