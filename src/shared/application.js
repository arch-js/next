/*
  src/shared/application.js
  define a new application
*/

import route from './route';

let appIndex = 0;

export default function application(routes, start) {
  return {
    index: appIndex++,
    routes: routes,
    start: start
  }
};
