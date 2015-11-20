import application from './application';
import component from './component';
import route from './route';

let componentIndex = {};

function getQuery(component) {
  let query = componentIndex[component] || componentIndex[component.constructor];

  if (query) {
    return query();
  }
}

function setQuery(component, query) {
  componentIndex[component] = query;
}

export { application, component, route, getQuery, setQuery };
