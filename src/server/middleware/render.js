import React from 'react';
import ReactDOMServer from 'react-dom/server';
import encode from 'ent/encode';

export default async (ctx, next) => {
  if (typeof ctx.arch === 'undefined') throw new Error('Render middleware must be run inside an Arch server.');

  let domRoot = ctx.arch.application.domRoot;
  let template = ctx.arch.options.template;
  let Component = ctx.arch.route.component;

  let body = ReactDOMServer.renderToString(
    <Component
        context={ctx.arch.context}
        state={ctx.arch.state}
    />
  );

  ctx.body = template.replace('{{root}}', `<script type="application/json" id="${domRoot}-state">${encode(JSON.stringify(ctx.arch.state))}</script>\n<div id="${domRoot}">${body}</div>`);
  await next;
}
