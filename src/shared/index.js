/**
 * Main shared module
 */

import application from './application';
import component from './component';
import route from './route';

let componentIndex = {};

function getQuery(component) {
  if (componentIndex[component]) {
    return componentIndex[component]();
  }

  throw new Error("No query registered for component: %s", component);
}

function setQuery(component, query) {
  componentIndex[component] = query;
}

export { application, component, route, getQuery, setQuery };
