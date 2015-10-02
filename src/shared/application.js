/*
  src/shared/application.js
  define a new application
*/

import route from './route';

export default function application(routes, start) {
  return {
    routes: routes,
    start: start
  }
};
