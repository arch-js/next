import { parse } from '../shared/route-parser';
import React from 'react';
import ReactDOM from 'react-dom';
import decode from 'ent/decode';

export default function render(application) {
  let url = `${window.location.protocol}//${window.location.host}${window.location.pathname}${window.location.search}`;

  let matches = parse(application.routes, url);

  if (matches) {
    let { route, context } = matches;
    const stateNode = document.getElementById(`${application.domRoot}-state`);
    const state = JSON.parse(decode(stateNode.text));
    let rootNode = document.getElementById(application.domRoot);
    const Component = route.component;

    ReactDOM.render(
      <Component
          context={context}
          state={state}
      />,
    rootNode);
  }
}
