import React from 'react';
import ReactDOMServer from 'react-dom/server';
import encode from 'ent/encode';

export default function* renderMiddleware(next) {
  if (typeof this.arch === 'undefined') throw new Error('Render middleware must be run inside an Arch server.');

  let domRoot = this.arch.application.domRoot;
  let template = this.arch.options.template;
  let Component = this.arch.route.component;

  let body = ReactDOMServer.renderToString(
    <Component
        context={this.arch.context}
        state={this.arch.state}
    />
  );

  this.body = template.replace('{{root}}', `<script type="application/json" id="${domRoot}-state">${encode(JSON.stringify(this.arch.state))}</script>\n<div id="${domRoot}">${body}</div>`);
  yield next;
}
